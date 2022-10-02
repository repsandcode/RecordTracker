const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home');
const authController = require('../controllers/auth');
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/login", authController.getLogin);
router.get("/signup", authController.getSignup);
router.get("/feed", ensureAuth, postsController.getFeed);

module.exports = router;