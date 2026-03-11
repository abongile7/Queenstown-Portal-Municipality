CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'candidate',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS jobs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  job_type TEXT NOT NULL,
  salary_min INTEGER,
  salary_max INTEGER,
  description TEXT NOT NULL,
  qualifications TEXT NOT NULL,
  closing_date DATE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS candidates (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  sa_id_number TEXT,
  date_of_birth DATE,
  ward_number TEXT,
  municipality TEXT DEFAULT 'Chris Hani District Municipality',
  province TEXT DEFAULT 'Eastern Cape',
  education TEXT,
  skills TEXT,
  experience TEXT,
  employment_status TEXT,
  cv_url TEXT,
  certificates_url TEXT,
  id_copy_url TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS applications (
  id SERIAL PRIMARY KEY,
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
  candidate_id INTEGER REFERENCES candidates(id) ON DELETE CASCADE,
  cv_url TEXT,
  cover_letter TEXT,
  motivation_letter TEXT,
  match_score NUMERIC(5,4) DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'Submitted',
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS youth_programs (
  id SERIAL PRIMARY KEY,
  program_name TEXT NOT NULL,
  department TEXT NOT NULL,
  duration TEXT,
  stipend TEXT,
  closing_date DATE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS epwp_workers (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  ward_number TEXT,
  skill_category TEXT,
  days_worked INTEGER DEFAULT 0,
  stipend_due NUMERIC(10,2) DEFAULT 0
);

CREATE TABLE IF NOT EXISTS epwp_projects (
  id SERIAL PRIMARY KEY,
  project_name TEXT NOT NULL,
  status TEXT DEFAULT 'Active'
);

CREATE TABLE IF NOT EXISTS epwp_assignments (
  id SERIAL PRIMARY KEY,
  worker_id INTEGER REFERENCES epwp_workers(id) ON DELETE CASCADE,
  project_id INTEGER REFERENCES epwp_projects(id) ON DELETE CASCADE,
  assigned_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO jobs (title, department, location, job_type, salary_min, salary_max, description, qualifications, closing_date)
VALUES
('Civil Engineer', 'Engineering Services', 'Queenstown', 'Full-time', 380000, 520000, 'Oversee roads and infrastructure upgrades.', 'BEng Civil Engineering, 3+ years experience', CURRENT_DATE + INTERVAL '30 days'),
('HR Officer', 'Corporate Services', 'Queenstown', 'Full-time', 240000, 360000, 'Manage recruitment and employee support.', 'HR Diploma or Degree, labour law knowledge', CURRENT_DATE + INTERVAL '21 days'),
('Water Technician', 'Engineering Services', 'Whittlesea', 'Full-time', 220000, 340000, 'Maintain municipal water systems and response.', 'Technical certification with field experience', CURRENT_DATE + INTERVAL '15 days')
ON CONFLICT DO NOTHING;
