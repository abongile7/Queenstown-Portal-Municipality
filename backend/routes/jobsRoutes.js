const router = require('express').Router();
const { listJobs, getJob, createJob } = require('../controllers/jobsController');
const auth = require('../middleware/auth');

router.get('/', listJobs);
router.get('/:id', getJob);
router.post('/', auth, createJob);

module.exports = router;
