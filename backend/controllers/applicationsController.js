const db = require('../models/db');
const { calculateMatchScore } = require('../utils/matching');
const { sendStatusEmail } = require('../utils/notifications');

async function apply(req, res) {
  const { jobId, motivationLetter } = req.body;
  const candidate = await db.query('SELECT * FROM candidates WHERE user_id = $1', [req.user.id]);
  if (!candidate.rows[0]) return res.status(400).json({ message: 'Create your profile first' });

  const job = await db.query('SELECT * FROM jobs WHERE id = $1', [jobId]);
  if (!job.rows[0]) return res.status(404).json({ message: 'Job not found' });

  const resumeText = `${candidate.rows[0].skills || ''} ${candidate.rows[0].experience || ''} ${candidate.rows[0].education || ''}`;
  const jobText = `${job.rows[0].description} ${job.rows[0].qualifications}`;
  const matchScore = calculateMatchScore(resumeText, jobText);

  const created = await db.query(
    `INSERT INTO applications(job_id, candidate_id, motivation_letter, match_score, status)
     VALUES ($1, $2, $3, $4, 'Submitted') RETURNING *`,
    [jobId, candidate.rows[0].id, motivationLetter, matchScore]
  );

  await sendStatusEmail(req.user.email, 'Application submitted', `Your application for ${job.rows[0].title} was submitted.`);
  return res.status(201).json(created.rows[0]);
}

async function updateStatus(req, res) {
  const { status } = req.body;
  const result = await db.query(
    `UPDATE applications SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *`,
    [status, req.params.id]
  );
  if (!result.rows[0]) return res.status(404).json({ message: 'Application not found' });

  const detail = await db.query(
    `SELECT u.email, j.title FROM applications a
      JOIN candidates c ON c.id = a.candidate_id
      JOIN users u ON u.id = c.user_id
      JOIN jobs j ON j.id = a.job_id
     WHERE a.id = $1`,
    [req.params.id]
  );
  await sendStatusEmail(detail.rows[0]?.email, 'Application status update', `Your ${detail.rows[0]?.title} application is now: ${status}`);

  res.json(result.rows[0]);
}

module.exports = { apply, updateStatus };
