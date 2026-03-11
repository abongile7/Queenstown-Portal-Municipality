const db = require('../models/db');

async function searchResidents(req, res) {
  const { skill = '', ward = '', qualification = '' } = req.query;
  const result = await db.query(
    `SELECT id, full_name, ward_number, education, skills FROM candidates
     WHERE ($1 = '' OR skills ILIKE '%' || $1 || '%')
       AND ($2 = '' OR ward_number = $2)
       AND ($3 = '' OR education ILIKE '%' || $3 || '%')
     ORDER BY full_name ASC`,
    [skill, ward, qualification]
  );
  res.json(result.rows);
}

module.exports = { searchResidents };
