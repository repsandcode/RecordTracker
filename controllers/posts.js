// const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

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
  getNewRecord: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("newRecord.ejs", { user: req.user });
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
        houseAdress: req.body.houseAdress,
        landmark: req.body.landmark,
        emailAddress: req.body.emailAddress,
        contactNumber: req.body.contactNumber,
        socialMediaLink: req.user.socialMedia,
        publisher: req.user.publisher,
        status: req.user.id,
        comments: req.user.id,
        publications: req.user.id,
        barangay: req.user.id,
      });
      console.log("Record has been added!");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
};