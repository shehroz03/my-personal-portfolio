import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Section, SectionHeader } from './ui/Section';
import { Input } from './ui/Input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/Button';

/**
 * TODO: CONTACT FORM BACKEND INTEGRATION
 * 
 * This contact form currently only shows a mock success message.
 * To make it functional, you need to:
 * 
 * 1. Set up a backend endpoint (e.g., Node.js/Express or serverless function)
 * 2. Integrate an email service:
 *    - EmailJS (https://www.emailjs.com/) - Easy frontend integration
 *    - SendGrid API (https://sendgrid.com/)
 *    - Nodemailer (if using Node.js backend)
 *    - Resend (https://resend.com/)
 * 3. Update handleSubmit function to POST form data to your endpoint
 * 4. Add proper error handling and validation
 * 5. Consider adding reCAPTCHA to prevent spam
 * 
 * Example with fetch:
 * const response = await fetch('/api/contact', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify(formData)
 * });
 */

import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast.success('Message sent successfully! I will get back to you soon.');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong. Please try again later.');
      console.error('Contact Form Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'shehrozshafiq03@gmail.com', // REAL PRODUCTION EMAIL - Do not change
      href: 'mailto:shehrozshafiq03@gmail.com', // REAL PRODUCTION EMAIL - Do not change
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/chshehrozshafiq', // REAL PRODUCTION LINK - Do not change
      href: 'https://www.linkedin.com/in/chshehrozshafiq/', // REAL PRODUCTION LINK - Do not change
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/shehroz03', // REAL PRODUCTION LINK - Do not change
      href: 'https://github.com/shehroz03', // REAL PRODUCTION LINK - Do not change
    },
  ];

  return (
    <Section id="contact" background="white">
      <SectionHeader
        title="Let's Work Together"
        subtitle="Have a project in mind? Get in touch and let's create something amazing."
      />

      <div className="grid lg:grid-cols-2 max-w-5xl mx-auto" style={{ gap: '64px' }}>
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              label="Name"
              placeholder="Your name"
              required
            />

            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              label="Email"
              placeholder="your.email@example.com"
              required
            />

            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              label="Message"
              placeholder="Tell me about your project..."
              rows={6}
              required
            />

            <Button type="submit" size="lg" className="w-full" disabled={isSending}>
              {isSending ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </Button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <div
              className="mt-6 p-4 bg-teal-50 border-2 border-teal-600 rounded-xl flex items-center gap-3 animate-fadeIn"
            >
              <CheckCircle size={24} className="text-teal-600 flex-shrink-0" />
              <div>
                <p
                  className="text-teal-900"
                  style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}
                >
                  Message sent successfully!
                </p>
                <p
                  className="text-teal-700"
                  style={{ fontSize: '14px' }}
                >
                  I'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Contact Methods */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h3
              className="text-gray-900"
              style={{
                fontSize: '24px',
                lineHeight: '1.3',
                fontWeight: 600,
                marginBottom: '24px'
              }}
            >
              Get in Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-50 rounded-xl hover:bg-teal-50 hover:shadow-lg hover:scale-105 transition-all duration-300 group active:scale-100"
                  style={{ gap: '16px', padding: '20px' }}
                >
                  <div
                    className="flex-shrink-0 bg-white rounded-lg flex items-center justify-center text-teal-600 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                    style={{ width: '56px', height: '56px' }}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <div
                      className="text-gray-500"
                      style={{ fontSize: '13px', marginBottom: '4px' }}
                    >
                      {method.label}
                    </div>
                    <div
                      className="text-gray-900 group-hover:text-teal-600 transition-colors"
                      style={{ fontSize: '16px', fontWeight: 500 }}
                    >
                      {method.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <p
              className="text-gray-600"
              style={{ fontSize: '16px', lineHeight: '1.6' }}
            >
              <span className="text-teal-600 font-semibold">Prefer email?</span> Reach out directly anytime and
              I'll get back to you within 24 hours.
            </p>
          </div>

          <div>
            <p
              className="text-gray-600"
              style={{ fontSize: '15px', marginBottom: '16px', fontWeight: 500 }}
            >
              Also available on:
            </p>
            <div className="flex flex-wrap" style={{ gap: '12px' }}>
              <a
                href="https://www.fiverr.com/scrapingmaster1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 hover:scale-105 active:scale-100 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                {/* REAL PRODUCTION LINK - Do not change */}
                Fiverr
              </a>
              <a
                href="https://wa.me/923214261477"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 hover:scale-105 active:scale-100 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
              >
                {/* REAL PRODUCTION LINK - WhatsApp +92 321 4261477 */}
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}