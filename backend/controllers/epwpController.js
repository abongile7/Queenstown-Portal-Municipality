const db = require('../models/db');

async function registerWorker(req, res) {
  const { fullName, wardNumber, skillCategory } = req.body;
  const result = await db.query(
    'INSERT INTO epwp_workers(full_name, ward_number, skill_category) VALUES ($1,$2,$3) RETURNING *',
    [fullName, wardNumber, skillCategory]
  );
  res.status(201).json(result.rows[0]);
}

async function assignWorker(req, res) {
  const { workerId, projectId } = req.body;
  const result = await db.query(
    'INSERT INTO epwp_assignments(worker_id, project_id) VALUES ($1,$2) RETURNING *',
    [workerId, projectId]
  );
  res.status(201).json(result.rows[0]);
}

async function trackWork(req, res) {
  const { workerId, daysWorked, stipendDue } = req.body;
  const result = await db.query(
    'UPDATE epwp_workers SET days_worked = $1, stipend_due = $2 WHERE id = $3 RETURNING *',
    [daysWorked, stipendDue, workerId]
  );
  res.json(result.rows[0]);
}

module.exports = { registerWorker, assignWorker, trackWork };
