const express = require("express");
const router = express.Router();
// const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, postsController.getRecord);

router.post("/createRecord", postsController.createRecord);

// router.post("/addVisit/:id", postsController.addVisit);

// router.delete("/deleteRecord/:id", postsController.deleteRecord);

module.exports = router;