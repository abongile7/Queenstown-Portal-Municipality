const router = require('express').Router();
const auth = require('../middleware/auth');
const { searchResidents } = require('../controllers/residentsController');

router.get('/skills-database', auth, searchResidents);

module.exports = router;
