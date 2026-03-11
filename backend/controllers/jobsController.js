const db = require('../models/db');

async function listJobs(req, res) {
  const { q = '', department = '', location = '', jobType = '' } = req.query;
  const result = await db.query(
    `SELECT * FROM jobs
     WHERE ($1 = '' OR title ILIKE '%' || $1 || '%' OR description ILIKE '%' || $1 || '%')
       AND ($2 = '' OR department = $2)
       AND ($3 = '' OR location = $3)
       AND ($4 = '' OR job_type = $4)
     ORDER BY created_at DESC`,
    [q, department, location, jobType]
  );
  res.json(result.rows);
}

async function getJob(req, res) {
  const result = await db.query('SELECT * FROM jobs WHERE id = $1', [req.params.id]);
  if (!result.rows[0]) return res.status(404).json({ message: 'Job not found' });
  res.json(result.rows[0]);
}

async function createJob(req, res) {
  const { title, department, location, job_type, salary_min, salary_max, description, qualifications, closing_date } = req.body;
  const result = await db.query(
    `INSERT INTO jobs (title, department, location, job_type, salary_min, salary_max, description, qualifications, closing_date)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
    [title, department, location, job_type, salary_min, salary_max, description, qualifications, closing_date]
  );
  res.status(201).json(result.rows[0]);
}

async function updateJob(req, res) {
  const { title, department, location, job_type, salary_min, salary_max, description, qualifications, closing_date } = req.body;
  const result = await db.query(
    `UPDATE jobs SET title=$1, department=$2, location=$3, job_type=$4, salary_min=$5, salary_max=$6,
      description=$7, qualifications=$8, closing_date=$9 WHERE id = $10 RETURNING *`,
    [title, department, location, job_type, salary_min, salary_max, description, qualifications, closing_date, req.params.id]
  );
  res.json(result.rows[0]);
}

async function closeJob(req, res) {
  const result = await db.query('UPDATE jobs SET closing_date = CURRENT_DATE WHERE id = $1 RETURNING *', [req.params.id]);
  res.json(result.rows[0]);
}

module.exports = { listJobs, getJob, createJob, updateJob, closeJob };
