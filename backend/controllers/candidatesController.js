const path = require('path');
const db = require('../models/db');
const { parseResume } = require('../utils/resumeParser');

async function upsertProfile(req, res) {
  const {
    fullName,
    saIdNumber,
    dateOfBirth,
    wardNumber,
    municipality,
    province,
    education,
    skills,
    experience,
    employmentStatus
  } = req.body;

  const result = await db.query(
    `INSERT INTO candidates(user_id, full_name, email, sa_id_number, date_of_birth, ward_number, municipality, province, education, skills, experience, employment_status)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
     ON CONFLICT (user_id)
     DO UPDATE SET full_name=EXCLUDED.full_name, sa_id_number=EXCLUDED.sa_id_number, date_of_birth=EXCLUDED.date_of_birth,
       ward_number=EXCLUDED.ward_number, municipality=EXCLUDED.municipality, province=EXCLUDED.province,
       education=EXCLUDED.education, skills=EXCLUDED.skills, experience=EXCLUDED.experience, employment_status=EXCLUDED.employment_status
     RETURNING *`,
    [req.user.id, fullName, req.user.email, saIdNumber, dateOfBirth, wardNumber, municipality, province, education, skills, experience, employmentStatus]
  );

  res.json(result.rows[0]);
}

async function uploadDocument(req, res) {
  if (!req.file) return res.status(400).json({ message: 'File is required' });
  const documentType = req.body.documentType || 'cv';
  const filename = path.basename(req.file.path);

  if (documentType === 'cv') {
    const parsed = await parseResume(req.file.path);
    const updated = await db.query(
      `UPDATE candidates SET cv_url = $1,
        full_name = COALESCE(NULLIF(full_name, ''), $2),
        education = COALESCE(NULLIF(education, ''), $3),
        skills = COALESCE(NULLIF(skills, ''), $4),
        experience = COALESCE(NULLIF(experience, ''), $5)
       WHERE user_id = $6 RETURNING *`,
      [filename, parsed.name, parsed.education, parsed.skills, parsed.experience, req.user.id]
    );

    return res.json({ parsed, profile: updated.rows[0] });
  }

  const field = documentType === 'idCopy' ? 'id_copy_url' : 'certificates_url';
  const updated = await db.query(`UPDATE candidates SET ${field} = $1 WHERE user_id = $2 RETURNING *`, [filename, req.user.id]);
  return res.json({ message: 'Document uploaded', profile: updated.rows[0] });
}

module.exports = { upsertProfile, uploadDocument };
