# 📋 Data Replacement Checklist for Shehroz Shafiq Portfolio

This document provides a complete checklist of all placeholder content that needs to be replaced with real data before deployment.

---

## ✅ **PRIORITY 1: Contact Information**

### **Email Address**

- [ ] `/components/Contact.tsx` - Line 63: `shehroz.shafiq@example.com`
- [ ] `/components/Contact.tsx` - Line 64: `mailto:shehroz.shafiq@example.com`
- [ ] `/components/Footer.tsx` - Line 16: `mailto:shehroz.shafiq@example.com`

**Action:** Replace all instances with your real email address.

---

### **LinkedIn Profile**

- [ ] `/components/Contact.tsx` - Line 69: `linkedin.com/in/shehrozshafiq`
- [ ] `/components/Contact.tsx` - Line 70: Full LinkedIn URL
- [ ] `/components/Footer.tsx` - Line 17: Full LinkedIn URL

**Action:** Replace with your actual LinkedIn profile URL (e.g., `https://www.linkedin.com/in/your-actual-username`)

---

### **GitHub Profile**

- [ ] `/components/Contact.tsx` - Line 75: `github.com/shehrozshafiq`
- [ ] `/components/Contact.tsx` - Line 76: Full GitHub URL
- [ ] `/components/Footer.tsx` - Line 18: Full GitHub URL

**Action:** Replace with your actual GitHub profile URL (e.g., `https://github.com/your-actual-username`)

---

### **Freelance Platform Links**

- [ ] `/components/Contact.tsx` - Line 214: Fiverr profile URL
- [ ] `/components/Contact.tsx` - Line 222: Upwork profile URL

**Action:** Replace `https://fiverr.com` and `https://upwork.com` with your actual profile links.

---

## 🎨 **PRIORITY 2: Images**

### **Hero Section**

- [ ] `/components/Hero.tsx` - Line 288: Hero workspace image
  - **Current:** Unsplash stock photo of laptop
  - **Replace with:** Professional workspace photo, coding setup, or custom illustration

---

### **About Section**

- [ ] `/components/About.tsx` - Line 34: Professional portrait
  - **Current:** Unsplash stock portrait
  - **Replace with:** Your actual professional headshot (square format, high quality)
  - **Recommended specs:** 800×800px minimum, PNG or JPG

---

### **Project Screenshots** (All 6 projects)

Each project has 5-7 placeholder screenshots from Unsplash. See `/components/ProjectDetail.tsx`:

- [ ] **Project 1 (E-Commerce Dashboard)** - Lines 48-52
- [ ] **Project 2 (Fitness Tracker)** - Lines 181-185
- [ ] **Project 3 (Restaurant Booking)** - Lines 239-243
- [ ] **Project 4 (Task Management)** - Lines 103-107
- [ ] **Project 5 (Portfolio Generator)** - Lines 295-299
- [ ] **Project 6 (Real Estate Listing)** - Lines 352-356

**Action:** Replace with actual project screenshots showing:

1. Main dashboard/home screen
2. Key features in action
3. Mobile responsive views (if applicable)
4. Admin panels or settings
5. User flows or interactions

---

## 📁 **PRIORITY 3: Project Data**

All project data is in `/components/Projects.tsx` and `/components/ProjectDetail.tsx`.

### **Project Grid Cards** (`/components/Projects.tsx`)

For each of the 6 projects (lines 104-151), update:

- [ ] **Project 1:** Title, description, image, tags, role
- [ ] **Project 2:** Title, description, image, tags, role
- [ ] **Project 3:** Title, description, image, tags, role
- [ ] **Project 4:** Title, description, image, tags, role
- [ ] **Project 5:** Title, description, image, tags, role
- [ ] **Project 6:** Title, description, image, tags, role

---

### **Project Detail Pages** (`/components/ProjectDetail.tsx`)

For each project, replace the following fields (starting at line 29):

#### **Basic Info:**

- [ ] `title` - Project name
- [ ] `subtitle` - One-line description
- [ ] `description` - Detailed paragraph about the project
- [ ] `role` - Your role on the project

#### **Project Info Card:**

- [ ] `type` - (e.g., "Client Project", "Personal", "FYP")
- [ ] `role` - Detailed role (e.g., "Full-Stack Developer")
- [ ] `duration` - How long it took (e.g., "3 months")
- [ ] `year` - Completion year
- [ ] `platform` - (e.g., "Web", "Mobile (iOS & Android)")

#### **Tech Stack:**

- [ ] `frontendTech` - Array of frontend technologies used
- [ ] `backendTech` - Array of backend technologies used
- [ ] `tags` - 3-5 category tags

#### **Links:**

- [ ] `liveDemo` - Live project URL (or `null` if not available)
- [ ] `sourceCode` - GitHub repository URL (or `null` if private/NDA)

#### **Project Content:**

- [ ] `screenshots` - Array of 5-7 real project screenshots
- [ ] `responsibilities` - 6 bullet points of what you did
- [ ] `process` - 4-step development process with descriptions
- [ ] `outcomes` - 3 realistic results/achievements

**Repeat this for all 6 projects.**

---

## 💬 **PRIORITY 4: Testimonials**

File: `/components/Testimonials.tsx` (starting at line 58)

Replace all 3 testimonials with real client feedback:

### **Testimonial 1:**

- [ ] `quote` - Actual client feedback
- [ ] `author` - Real client name
- [ ] `role` - Client's job title
- [ ] `company` - Client's company name

### **Testimonial 2:**

- [ ] `quote` - Actual client feedback
- [ ] `author` - Real client name
- [ ] `role` - Client's job title
- [ ] `company` - Client's company name

### **Testimonial 3:**

- [ ] `quote` - Actual client feedback
- [ ] `author` - Real client name
- [ ] `role` - Client's job title
- [ ] `company` - Client's company name

**Action:** If you don't have testimonials yet:

- Reach out to past clients/professors for feedback
- Use LinkedIn recommendations
- Start with 1-2 real testimonials and add more later
- Remove the section entirely if no testimonials available (delete from `/App.tsx` line 129)

---

## ⚙️ **PRIORITY 5: Contact Form Backend**

File: `/components/Contact.tsx`

The contact form currently shows a **mock success message** only.

### **To make it functional:**

1. **Choose an email service:**
   - [ ] [EmailJS](https://www.emailjs.com/) (Easiest - no backend needed)
   - [ ] [SendGrid](https://sendgrid.com/)
   - [ ] [Resend](https://resend.com/)
   - [ ] Custom Node.js backend with Nodemailer

2. **Integration steps:**
   - [ ] Set up email service account
   - [ ] Get API keys
   - [ ] Update `handleSubmit` function (line 40) to POST to endpoint
   - [ ] Add error handling
   - [ ] Test form submissions

3. **Optional security:**
   - [ ] Add Google reCAPTCHA to prevent spam
   - [ ] Add rate limiting
   - [ ] Validate form inputs on backend

**See detailed instructions in `/components/Contact.tsx` comments (lines 8-29)**

---

## 📝 **Optional: Content Refinements**

### **Hero Section Text** (`/components/Hero.tsx`)

- Line 237: Main heading - "Full-Stack & Mobile App Developer"
- Line 249: Subheading describing your skills
- Line 261: Body paragraph about your approach

**Current text is generic. Consider personalizing to reflect your unique value proposition.**

---

### **About Section Bio** (`/components/About.tsx`)

- Lines 47-62: Two bio paragraphs

**Current bio mentions BCS, freelancing, FYP. Update with your actual background and story.**

---

### **About Section Timeline** (`/components/About.tsx`)

- Lines 6-22: Three timeline items (Education, FYP, Freelance)

**Update with your actual career milestones and descriptions.**

---

### **Services Descriptions** (`/components/Services.tsx`)

- Lines 80-99: Three service cards

**Refine service descriptions to match what you actually offer.**

---

## 🔍 **How to Search for TODOs in Code**

You can find all TODO comments by searching for:

```bash
grep -r "TODO:" components/
```

Or use your code editor's search function to find `TODO:` across all files.

---

## 📦 **After Replacement Checklist**

Before deploying:

- [ ] All email addresses updated to real email
- [ ] All social media links working and pointing to your profiles
- [ ] All project screenshots replaced with real images
- [ ] All project data (title, description, tech stack) updated
- [ ] All testimonials are from real clients (or section removed)
- [ ] Contact form integrated with email service and tested
- [ ] Hero and About section images replaced
- [ ] All external links tested (GitHub repos, live demos)
- [ ] Bio and service descriptions personalized
- [ ] Test on mobile, tablet, and desktop
- [ ] Run final build and check for console errors

---

## 🚀 **Quick Replacement Priority**

**Can deploy with minimal changes:**

1. Update contact info (email, LinkedIn, GitHub)
2. Replace at least 1-2 projects with real data
3. Remove or replace testimonials section

**For production-ready portfolio:**

1. All contact information
2. All 6 projects with real screenshots and data
3. Professional portrait photo
4. Real client testimonials
5. Working contact form
6. Custom hero image/illustration

---

## 📧 **Questions?**

If you need help with any replacements:

1. Check the inline `TODO:` comments in each file
2. Review the actual data structure in `/components/ProjectDetail.tsx`
3. See example project data format for reference

Good luck, Shehroz! 🎉