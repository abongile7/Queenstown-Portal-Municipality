const router = require('express').Router();
const auth = require('../middleware/auth');
const { listPrograms, createProgram } = require('../controllers/programsController');

router.get('/', listPrograms);
router.post('/', auth, createProgram);

module.exports = router;
