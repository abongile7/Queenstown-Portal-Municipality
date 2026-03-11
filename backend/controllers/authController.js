const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/db');

async function register(req, res) {
  const { name, email, password, role = 'candidate' } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const created = await db.query(
    'INSERT INTO users(name, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role',
    [name, email, passwordHash, role]
  );

  if (role === 'candidate') {
    await db.query('INSERT INTO candidates(user_id, full_name, email) VALUES($1,$2,$3) ON CONFLICT(user_id) DO NOTHING', [created.rows[0].id, name, email]);
  }

  return res.status(201).json(created.rows[0]);
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  if (!user.rows[0]) return res.status(401).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.rows[0].password_hash);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

  const candidate = await db.query('SELECT id FROM candidates WHERE user_id = $1', [user.rows[0].id]);
  const token = jwt.sign({ id: user.rows[0].id, role: user.rows[0].role, email: user.rows[0].email }, process.env.JWT_SECRET, { expiresIn: '12h' });

  return res.json({ token, candidateId: candidate.rows[0]?.id || null });
}

module.exports = { register, login };
