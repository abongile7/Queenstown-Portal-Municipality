const router = require('express').Router();
const auth = require('../middleware/auth');
const { apply, updateStatus } = require('../controllers/applicationsController');

router.post('/', auth, apply);
router.patch('/:id/status', auth, updateStatus);

module.exports = router;
