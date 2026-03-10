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
  name TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  education TEXT,
  skills TEXT,
  experience TEXT,
  resume_path TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS applications (
  id SERIAL PRIMARY KEY,
  job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
  candidate_id INTEGER REFERENCES candidates(id) ON DELETE CASCADE,
  motivation_letter TEXT,
  match_score NUMERIC(5,4) DEFAULT 0,
  status TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO jobs (title, department, location, job_type, salary_min, salary_max, description, qualifications, closing_date)
VALUES
('Civil Engineer', 'Infrastructure', 'Queenstown', 'Full-time', 380000, 520000, 'Oversee roads and infrastructure upgrades.', 'BEng Civil Engineering, 3+ years experience', CURRENT_DATE + INTERVAL '30 days'),
('HR Officer', 'Human Resources', 'Queenstown', 'Full-time', 240000, 360000, 'Manage recruitment and employee support.', 'HR Diploma or Degree, labour law knowledge', CURRENT_DATE + INTERVAL '21 days'),
('Water Technician', 'Water Services', 'Whittlesea', 'Full-time', 220000, 340000, 'Maintain municipal water systems and response.', 'Technical certification with field experience', CURRENT_DATE + INTERVAL '15 days')
ON CONFLICT DO NOTHING;
