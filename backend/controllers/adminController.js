const db = require('../models/db');

async function listApplications(req, res) {
  const { minScore = 0, status = '' } = req.query;
  const result = await db.query(
    `SELECT a.id, a.status, a.match_score, a.created_at, c.full_name AS candidate_name, c.email, c.skills, c.ward_number, j.title AS job_title
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
  const [
    totalApplicants,
    perWard,
    youthApplicants,
    jobsPosted,
    jobsFilled,
    skillsShortages,
    programParticipation,
    pipeline
  ] = await Promise.all([
    db.query('SELECT COUNT(*)::int AS total FROM applications'),
    db.query(`SELECT COALESCE(c.ward_number, 'Unassigned') AS ward, COUNT(a.id)::int AS applicants
      FROM applications a JOIN candidates c ON c.id = a.candidate_id GROUP BY ward ORDER BY ward`),
    db.query(`SELECT COALESCE(c.ward_number, 'Unassigned') AS ward, COUNT(*)::int AS total
      FROM candidates c WHERE c.date_of_birth >= CURRENT_DATE - INTERVAL '35 years' GROUP BY ward`),
    db.query('SELECT COUNT(*)::int AS total FROM jobs'),
    db.query(`SELECT COUNT(*)::int AS total FROM applications WHERE status = 'Hired'`),
    db.query(`SELECT unnest(string_to_array(skills, ',')) AS skill, COUNT(*)::int AS demand
      FROM candidates WHERE skills IS NOT NULL GROUP BY skill ORDER BY demand DESC LIMIT 8`),
    db.query('SELECT department, COUNT(*)::int AS participants FROM youth_programs GROUP BY department'),
    db.query('SELECT status, COUNT(*)::int AS total FROM applications GROUP BY status')
  ]);

  res.json({
    totalApplicants: totalApplicants.rows[0].total,
    applicationsPerWard: perWard.rows,
    youthApplicants: youthApplicants.rows,
    jobsPosted: jobsPosted.rows[0].total,
    jobsFilled: jobsFilled.rows[0].total,
    skillsShortages: skillsShortages.rows,
    programParticipation: programParticipation.rows,
    hiringPipeline: pipeline.rows
  });
}

module.exports = { listApplications, analytics };
