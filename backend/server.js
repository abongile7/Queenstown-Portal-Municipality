require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const jobsRoutes = require('./routes/jobsRoutes');
const candidatesRoutes = require('./routes/candidatesRoutes');
const applicationsRoutes = require('./routes/applicationsRoutes');
const adminRoutes = require('./routes/adminRoutes');
const programsRoutes = require('./routes/programsRoutes');
const epwpRoutes = require('./routes/epwpRoutes');
const residentsRoutes = require('./routes/residentsRoutes');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/uploads', express.static('uploads'));

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/candidates', candidatesRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/programs', programsRoutes);
app.use('/api/epwp', epwpRoutes);
app.use('/api/residents', residentsRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API listening on ${port}`));
