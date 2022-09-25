const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home');
const authController = require('../controllers/auth');

// Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/login", authController.getLogin);
router.get("/signup", authController.getSignup);

module.exports = router;