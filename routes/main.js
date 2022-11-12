const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home');
const authController = require('../controllers/auth');
const postsController = require('../controllers/posts');
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// :::; Main Routes - simplified for now

// index
router.get("/", homeController.getIndex);

// login
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

// logout
router.get("/logout", authController.logout);

// signup
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// profile, feed, new record
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/newRecord", ensureAuth, postsController.getNewRecord);

module.exports = router;