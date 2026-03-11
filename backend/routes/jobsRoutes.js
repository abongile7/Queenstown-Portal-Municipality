const router = require('express').Router();
const { listJobs, getJob, createJob, updateJob, closeJob } = require('../controllers/jobsController');
const auth = require('../middleware/auth');

router.get('/', listJobs);
router.get('/:id', getJob);
router.post('/', auth, createJob);
router.put('/:id', auth, updateJob);
router.patch('/:id/close', auth, closeJob);

module.exports = router;
