const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  initialCallSetting: {
    type: String,
    required: true,
    enum: ['Door to Door Ministry', 'Street Witnessing', 'Public Witnessing', 'Informal Witnessing', 'Referral']
  },
  completeName: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female'],
  },
  municipality: {
    type: String,
    required: true,
  },
  barangay: {
    type: String,
    required: true,
  },
  houseAdress: {
    type: String,
    required: true,
  },
  landMark: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  telephoneNumber: {
    type: String,
  },
  socialMediaLink: {
    type: String,
  },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Initial Call', 'Return Visit', 'Bible Study', 'Not Interested', 'Do Not Call', 'Not in Territory'],
  },
  comments: {
    type: String,
    required: true,
  },
  publications: {
    type: String,
    required: true,
  },
  isEnglishDependent: {
    type: String,
    enum: ['Yes', 'No'],
  },
  livesWithPangasinan: {
    type: String,
    enum: ['Yes', 'No'],
  },
  isAttendingMeetings: {
    type: String,
    enum: ['Yes', 'No'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);