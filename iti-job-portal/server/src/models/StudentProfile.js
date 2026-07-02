const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    trade: {
      type: String,
      required: [true, 'Trade is required'],
      trim: true,
    },
    itiInstituteName: {
      type: String,
      required: [true, 'ITI institute name is required'],
      trim: true,
    },
    qualification: {
      type: String,
      trim: true,
      default: 'ITI',
    },
    yearOfPassing: {
      type: Number,
      min: 1950,
      max: new Date().getFullYear() + 5,
      default: null,
    },
    experienceLevel: {
      type: String,
      enum: ['fresher', 'intern', '1-2 years', '2+ years'],
      default: 'fresher',
    },
    skills: [
      {
        type: String,
        trim: true,
      },
    ],
    certifications: [
      {
        title: String,
        issuer: String,
        year: Number,
      },
    ],
    resumeUrl: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      trim: true,
      default: '',
    },
    contactNumber: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

studentProfileSchema.index({ trade: 1, location: 1 });

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
