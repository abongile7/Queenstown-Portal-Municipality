const db = require('../models/db');

async function listPrograms(req, res) {
  const result = await db.query('SELECT * FROM youth_programs ORDER BY created_at DESC');
  res.json(result.rows);
}

async function createProgram(req, res) {
  const { programName, department, duration, stipend, closingDate } = req.body;
  const result = await db.query(
    `INSERT INTO youth_programs(program_name, department, duration, stipend, closing_date)
     VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    [programName, department, duration, stipend, closingDate]
  );
  res.status(201).json(result.rows[0]);
}

module.exports = { listPrograms, createProgram };
