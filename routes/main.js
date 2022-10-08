const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home');
const authController = require('../controllers/auth');
const postsController = require('../controllers/posts');
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Main Routes - simplified for now
router.get("/", homeController.getIndex);
// login
router.get("/login", authController.getLogin);
// signup
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
// profile & feed
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);

module.exports = router;