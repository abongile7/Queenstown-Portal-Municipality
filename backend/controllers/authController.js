const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/db');

async function register(req, res) {
  const { name, email, password, role = 'candidate' } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const result = await db.query(
    'INSERT INTO users(name, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role',
    [name, email, passwordHash, role]
  );
  return res.status(201).json(result.rows[0]);
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  if (!user.rows[0]) return res.status(401).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.rows[0].password_hash);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign(
    { id: user.rows[0].id, role: user.rows[0].role, email: user.rows[0].email },
    process.env.JWT_SECRET,
    { expiresIn: '12h' }
  );

  return res.json({ token });
}

module.exports = { register, login };
