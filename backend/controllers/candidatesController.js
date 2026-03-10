const path = require('path');
const db = require('../models/db');
const { parseResume } = require('../utils/resumeParser');

async function upsertProfile(req, res) {
  const { name, phone, address, education, skills, experience } = req.body;
  const result = await db.query(
    `INSERT INTO candidates(user_id, name, email, phone, address, education, skills, experience)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     ON CONFLICT (user_id)
     DO UPDATE SET name = EXCLUDED.name, phone = EXCLUDED.phone, address = EXCLUDED.address,
      education = EXCLUDED.education, skills = EXCLUDED.skills, experience = EXCLUDED.experience
     RETURNING *`,
    [req.user.id, name, req.user.email, phone, address, education, skills, experience]
  );
  res.json(result.rows[0]);
}

async function uploadResume(req, res) {
  if (!req.file) return res.status(400).json({ message: 'CV file is required' });
  const parsed = await parseResume(req.file.path);

  const result = await db.query(
    `UPDATE candidates SET resume_path = $1, name = COALESCE(NULLIF(name, ''), $2),
      phone = COALESCE(NULLIF(phone, ''), $3), education = COALESCE(NULLIF(education, ''), $4),
      skills = COALESCE(NULLIF(skills, ''), $5), experience = COALESCE(NULLIF(experience, ''), $6)
     WHERE user_id = $7 RETURNING *`,
    [path.basename(req.file.path), parsed.name, parsed.phone, parsed.education, parsed.skills, parsed.experience, req.user.id]
  );

  res.json({ parsed, profile: result.rows[0] });
}

module.exports = { upsertProfile, uploadResume };
