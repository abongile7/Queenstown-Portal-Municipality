const db = require('../models/db');

async function listApplications(req, res) {
  const { minScore = 0, status = '' } = req.query;
  const result = await db.query(
    `SELECT a.id, a.status, a.match_score, a.created_at, c.name AS candidate_name, c.email, c.skills, j.title AS job_title
     FROM applications a
     JOIN candidates c ON c.id = a.candidate_id
     JOIN jobs j ON j.id = a.job_id
     WHERE a.match_score >= $1 AND ($2 = '' OR a.status = $2)
     ORDER BY a.match_score DESC`,
    [minScore, status]
  );
  res.json(result.rows);
}

async function analytics(req, res) {
  const [totalApplicants, perJob, topSkills, pipeline] = await Promise.all([
    db.query('SELECT COUNT(*)::int AS total FROM applications'),
    db.query('SELECT j.title, COUNT(a.id)::int AS applicants FROM jobs j LEFT JOIN applications a ON a.job_id = j.id GROUP BY j.title ORDER BY applicants DESC'),
    db.query(`SELECT unnest(string_to_array(skills, ',')) AS skill, COUNT(*)::int AS occurrences
      FROM candidates WHERE skills IS NOT NULL GROUP BY skill ORDER BY occurrences DESC LIMIT 10`),
    db.query('SELECT status, COUNT(*)::int AS total FROM applications GROUP BY status')
  ]);

  res.json({
    totalApplicants: totalApplicants.rows[0].total,
    applicationsPerJob: perJob.rows,
    topSkills: topSkills.rows,
    hiringPipeline: pipeline.rows
  });
}

module.exports = { listApplications, analytics };
