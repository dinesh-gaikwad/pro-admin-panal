const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudentProfile',
      required: true,
    },
    appliedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    coverLetter: {
      type: String,
      trim: true,
      default: '',
    },
    expectedJoinDate: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ['applied', 'under_review', 'shortlisted', 'rejected', 'hired', 'withdrawn'],
      default: 'applied',
    },
    employerNotes: {
      type: String,
      trim: true,
      default: '',
    },
    studentNotes: {
      type: String,
      trim: true,
      default: '',
    },
    isWithdrawn: {
      type: Boolean,
      default: false,
    },
    appliedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

applicationSchema.index({ jobId: 1, studentId: 1 }, { unique: true });
applicationSchema.index({ studentId: 1, status: 1 });
applicationSchema.index({ jobId: 1, status: 1 });

module.exports = mongoose.model('Application', applicationSchema);
