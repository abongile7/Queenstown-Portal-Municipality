const router = require('express').Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const { upsertProfile, uploadDocument } = require('../controllers/candidatesController');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`)
});
const upload = multer({ storage });

router.post('/profile', auth, upsertProfile);
router.post('/upload', auth, upload.single('file'), uploadDocument);

module.exports = router;
