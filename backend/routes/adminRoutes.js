const router = require('express').Router();
const auth = require('../middleware/auth');
const { listApplications, analytics } = require('../controllers/adminController');

router.get('/applications', auth, listApplications);
router.get('/analytics', auth, analytics);

module.exports = router;
