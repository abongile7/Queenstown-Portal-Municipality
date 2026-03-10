# Admin Dashboard Notes

This folder documents HR dashboard capabilities provided by backend `/api/admin` endpoints.

## Key capabilities
- Secure HR login with JWT (`/api/auth/login` as role `admin`)
- Post/edit/close vacancies (`/api/jobs` protected write route)
- Review applicants sorted by AI match score (`/api/admin/applications`)
- Update application pipeline status (`/api/applications/:id/status`)
- Analytics for total applicants, applications per job, top skills, and pipeline (`/api/admin/analytics`)

A dedicated frontend can consume these endpoints to render charts and recruitment workflows.
