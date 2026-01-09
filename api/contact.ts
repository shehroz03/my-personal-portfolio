import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';
import { LRUCache } from 'lru-cache';

// Initialize Resend with API Key from environment variables
// In production, ensure RESEND_API_KEY is set in Vercel environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

// Validation schema for the contact form
const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Simple in-memory rate limiter
// Max 5 requests per hour per IP
const rateLimit = new LRUCache<string, number>({
    max: 500,
    ttl: 1000 * 60 * 60, // 1 hour
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Basic Rate Limiting
    const ip = (req.headers['x-forwarded-for'] as string) || 'anonymous';
    const currentUsage = rateLimit.get(ip) || 0;

    if (currentUsage >= 5) {
        return res.status(429).json({
            error: 'Too many requests. Please try again in an hour.'
        });
    }

    try {
        // Validate input
        const validatedData = contactSchema.parse(req.body);

        // Increment usage
        rateLimit.set(ip, currentUsage + 1);

        // Send email via Resend
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // You can change this once you verify your domain
            to: 'shehrozshafiq03@gmail.com',
            subject: `New Contact Form Submission from ${validatedData.name}`,
            replyTo: validatedData.email,
            text: `
Name: ${validatedData.name}
Email: ${validatedData.email}

Message:
${validatedData.message}
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(500).json({ error: 'Failed to send email. Check if RESEND_API_KEY is correct.' });
        }

        return res.status(200).json({ success: true, message: 'Email sent successfully', data });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({ error: err.errors[0].message });
        }
        console.error('API Error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
