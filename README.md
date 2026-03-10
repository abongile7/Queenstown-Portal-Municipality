# Queenstown Municipal Digital Platform

Full-stack municipal portal and recruitment system for **Chris Hani District Municipality (Queenstown, Eastern Cape)**.

## Stack
- Frontend: Next.js + Tailwind CSS
- Backend: Node.js + Express API
- Database: PostgreSQL
- Auth: JWT
- File Uploads: Multer (CVs)
- Notifications: Nodemailer

## Project Structure
```
frontend/          # Municipal website + careers portal UI
backend/           # REST API, auth, CV parsing, matching, analytics
database/schema.sql
admin-dashboard/   # HR dashboard endpoint documentation
```

## Features Delivered
- Public municipal pages: Home, About, Leadership, Services, Community, Projects, Careers, Contact.
- Careers portal with search/filter and detailed job pages.
- Candidate journey pages: register, login, profile, CV upload, status tracking.
- CV parser utility extracting name/email/phone + profile sections.
- AI-style matching utility using cosine similarity over token vectors.
- Application status pipeline: Submitted, Under Review, Shortlisted, Interview Scheduled, Rejected, Hired.
- HR admin APIs for vacancy posting, applicant management, and analytics.

## Run Locally
1. Install dependencies:
   ```bash
   npm install
   npm --workspace frontend install
   npm --workspace backend install
   ```
2. Copy env and configure DB/JWT:
   ```bash
   cp backend/.env.example backend/.env
   ```
3. Initialize PostgreSQL schema:
   ```bash
   psql "$DATABASE_URL" -f database/schema.sql
   ```
4. Start backend:
   ```bash
   npm run dev:backend
   ```
5. Start frontend:
   ```bash
   npm run dev:frontend
   ```

## Security Notes
- JWT-protected endpoints for candidate/admin operations.
- Server-side validation still recommended as a next hardening step.
- Use HTTPS + secure object storage in production for POPIA compliance.
