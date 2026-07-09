<div align="center">

# XPERA

### Gain Experience Before You Get Hired.

An AI-powered experience platform connecting students with organizations through real-world projects to build practical experience before internships and full-time jobs.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## Overview

XPERA is an AI-powered experience platform designed to help students gain practical experience before entering the job market.

Organizations can publish real-world projects, while students apply, collaborate, and build verified project experience that strengthens their skills and professional portfolio.

The platform aims to reduce the gap between education and industry through project-based learning and AI-assisted guidance.

---

## Why XPERA?

Most platforms help students find internships, freelance work, or build professional networks.

XPERA focuses on a different challenge—helping students build practical experience before they enter the industry.

> **Experience is the Product.**

---

## Problem Statement

Many students graduate with theoretical knowledge but limited practical experience, while organizations often expect candidates to have hands-on project exposure.

This gap between education and industry makes it difficult for fresh graduates to demonstrate their abilities.

---

## Solution

XPERA connects organizations and students through real-world projects, enabling students to gain practical experience while helping organizations discover emerging talent.

---

## Features

### Student Portal

- Secure Authentication
- Personalized Dashboard
- AI Resume Analysis
- AI Career Coach
- Recommended Projects
- Application Tracking
- Profile Management

### Organization Portal

- Organization Dashboard
- Create, Update and Delete Projects
- Applicant Management
- Hiring Funnel
- Analytics Dashboard
- AI Hiring Guide

### Platform

- Role-Based Authentication
- Protected Routes
- CRUD Operations
- Responsive Interface
- Email Notifications
- PostgreSQL Database Integration

---

## AI Features

### Student

- Resume Analysis
- Career Guidance
- Personalized Recommendations

### Organization

- AI Hiring Guide
- Hiring Assistance

AI is designed to support better decision-making while keeping users in complete control.

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19, Vite, JavaScript, CSS3 |
| Routing | React Router DOM |
| Backend | Supabase |
| Database | PostgreSQL |
| Authentication | Supabase Authentication |
| AI | Groq AI, Groq Vision |
| Email | Resend |
| Charts | Recharts |
| Icons | React Icons |
| Deployment | Vercel |

---

## System Architecture

```text
                    XPERA

              React Frontend
                     │
      ┌──────────────┼──────────────┐
      │              │              │
      ▼              ▼              ▼
 Authentication   PostgreSQL     AI Services
   (Supabase)     (Supabase)       (Groq)
      │
      ▼
 Email Notifications
     (Resend)
```

---

## Application Workflow

```text
Organization
      │
Creates Project
      │
      ▼
Student Explores Projects
      │
      ▼
Student Applies
      │
      ▼
Organization Reviews Applications
      │
      ▼
Student Completes Project
      │
      ▼
Student Gains Practical Experience
```

---

## Authentication

Authentication is implemented using Supabase Authentication with role-based access control.

After successful login, users are redirected to their respective dashboards based on their assigned role.

- Student
- Organization

Protected routes ensure secure access throughout the application.

---

## Database

Supabase PostgreSQL is used to manage:

- User Profiles
- Organizations
- Projects
- Applications
- User Roles

The database is designed to support secure authentication, project management, and role-based access.

---

## Getting Started

Clone the repository.

```bash
git clone https://github.com/pritiimishraa12/Xpera.git
```

Navigate to the project.

```bash
cd Xpera
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Create a production build.

```bash
npm run build
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
VITE_SUPABASE_URL=

VITE_SUPABASE_ANON_KEY=

VITE_GROQ_API_KEY=

VITE_RESEND_API_KEY=
```

---

## Future Roadmap

- AI-powered Project Matching
- Experience Verification
- Digital Completion Certificates
- Team Collaboration
- Interview Scheduling
- Mobile Application
- Advanced Analytics
- Real-time Notifications

---

## Live Demo

Experience XPERA through the live deployment and explore the complete source code below.

**Live Demo:** https://xperaa.vercel.app/

**GitHub Repository:** https://github.com/pritiimishraa12/Xpera

---

## Author

**Priti Mishra**

GitHub: https://github.com/pritiimishraa12
