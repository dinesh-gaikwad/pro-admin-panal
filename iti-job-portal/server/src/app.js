const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const authRoutes = require('./routes/auth.routes');
const studentRoutes = require('./routes/student.routes');
const employerRoutes = require('./routes/employer.routes');
const jobRoutes = require('./routes/job.routes');
const applicationRoutes = require('./routes/application.routes');
const adminRoutes = require('./routes/admin.routes');

const { notFound, errorHandler } = require('./middlewares/error.middleware');

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
    credentials: true,
  })
);

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'ITI Job Portal API is running',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/employers', employerRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/admin', adminRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;