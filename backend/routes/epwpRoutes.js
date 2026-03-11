const router = require('express').Router();
const auth = require('../middleware/auth');
const { registerWorker, assignWorker, trackWork } = require('../controllers/epwpController');

router.post('/workers', auth, registerWorker);
router.post('/assignments', auth, assignWorker);
router.patch('/workers/worklog', auth, trackWork);

module.exports = router;
