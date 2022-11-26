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
  landmark: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  contactNumber: {
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
    default: 'No',
  },
  livesWithPangasinan: {
    type: String,
    default: 'No',
  },
  isAttendingMeetings: {
    type: String,
    default: 'No',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

function duplicate(v){
  return v === undefined ? this.name : v;
}

module.exports = mongoose.model("Post", PostSchema);