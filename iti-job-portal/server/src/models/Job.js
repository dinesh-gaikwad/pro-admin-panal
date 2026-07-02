const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    employerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'EmployerProfile',
      required: true,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
      maxlength: 120,
    },
    tradeSkill: {
      type: String,
      required: [true, 'Trade skill is required'],
      trim: true,
    },
    jobType: {
      type: String,
      enum: ['apprenticeship', 'full-time', 'part-time', 'contract'],
      default: 'apprenticeship',
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    salaryRange: {
      min: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        default: 0,
      },
      currency: {
        type: String,
        default: 'INR',
      },
    },
    experienceLevel: {
      type: String,
      enum: ['fresher', '1-2 years', '2+ years'],
      default: 'fresher',
    },
    vacancies: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
    description: {
      type: String,
      required: [true, 'Job description is required'],
      trim: true,
    },
    requirements: [
      {
        type: String,
        trim: true,
      },
    ],
    benefits: [
      {
        type: String,
        trim: true,
      },
    ],
    applicationDeadline: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ['draft', 'active', 'closed', 'paused'],
      default: 'active',
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

jobSchema.index({ tradeSkill: 1, location: 1, status: 1 });
jobSchema.index({ employerId: 1, createdAt: -1 });

module.exports = mongoose.model('Job', jobSchema);
