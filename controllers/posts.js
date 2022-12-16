// const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getRecord: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("record.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getNewRecord: async (req, res) => {
    try {
      const users = await User.find().sort({ createdAt: "desc" }).lean();
      res.render("newRecord.ejs", { users: users, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createRecord: async (req, res) => {
    try {
      
      await Post.create({
        initialCallSetting: req.body.initialCallSetting,
        completeName: req.body.completeName,
        nationality: req.body.nationality,
        gender: req.body.gender,
        municipality: req.body.municipality,
        barangay: req.body.barangay,
        houseAddress: req.body.houseAddress,
        landmark: req.body.landmark,
        emailAddress: req.body.emailAddress,
        contactNumber: req.body.contactNumber,
        socialMediaLink: req.body.socialMedia,
        publisher: req.user.id,
        status: req.body.status,
        comments: req.body.comments,
        publications: req.body.publications,
        isEnglishDependent: req.body.isEnglishDependent,
        livesWithPangasinan: req.body.livesWithPangasinan,
        isAttendingMeetings: req.body.isAttendingMeetings,
      });
      
      console.log("Record has been added!");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
};