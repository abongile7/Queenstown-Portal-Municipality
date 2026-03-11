# Municipal Admin Dashboard

Admin panel capabilities for Chris Hani District Municipality:

- Create, edit, close vacancies (`POST/PUT/PATCH /api/jobs`)
- Create youth programmes (`POST /api/programs`)
- Manage EPWP worker registration, assignment, and stipend tracking (`/api/epwp/*`)
- Manage resident skills database search (`GET /api/residents/skills-database`)
- View applicants and approve applications (`GET /api/admin/applications`, `PATCH /api/applications/:id/status`)
- View analytics for charts:
  - applications per ward (bar chart)
  - youth applicants by ward (line chart)
  - hiring pipeline (pie chart)
  - jobs posted vs jobs filled
  - skills shortages
  - programme participation
- Export reports via API data extracts.
