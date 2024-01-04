const express = require("express");
const {signUp, logIn} = require("../../controllers/auth-controller");
const { postImage } = require("../../controllers/image-controller");
const { upload } = require("../../services/upload");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/", upload.single("image"), postImage);

module.exports = router;