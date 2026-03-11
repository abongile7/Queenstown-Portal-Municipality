# Chris Hani District Municipality Digital Government Platform

Official municipal digital portal for Queenstown (Komani), Eastern Cape, South Africa.

**Tagline:** Serving Communities Through Sustainable Development

## Stack
- Frontend: Next.js 14 + React + Tailwind
- Backend: Node.js + Express
- Database: PostgreSQL-compatible SQL schema

## Core Platform Modules
- Municipal website (branding, hero, services, projects, news, gallery, contact)
- Digital job portal (vacancies, details, apply workflow)
- Resident profile system (ward + skills + document uploads)
- Youth opportunities portal (internships, learnerships, graduate programmes, training)
- EPWP programme management (workers, assignments, work days, stipends)
- Skills database search by skill/ward/qualification
- Municipal analytics dashboard APIs (ward, youth, pipeline, jobs, skills)

## Project Structure
- `frontend/`
- `backend/`
- `database/`
- `admin-dashboard/`

## Run Locally
1. `npm install`
2. `cp backend/.env.example backend/.env`
3. `psql "$DATABASE_URL" -f database/schema.sql`
4. `npm run dev:backend`
5. `npm run dev:frontend`

## Key Workflow: Apply Button
1. Resident clicks Apply on a job detail page.
2. If not logged in, resident is redirected to login.
3. After login, resident is redirected back to the job page.
4. `POST /api/applications` saves `{ candidateId, jobId, cvUrl, coverLetter }` and returns confirmation.
5. Frontend redirects to success page with job title, application date, and status.
