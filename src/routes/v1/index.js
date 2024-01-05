const express = require("express");
const {signUp, logIn, updateUsers, deleteUser, addRoleToUser} = require("../../controllers/auth-controller");
const { postImage } = require("../../controllers/image-controller");
const { upload } = require("../../services/upload");

const   router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/", upload.single("image"), postImage);
router.post("/role", addRoleToUser)
router.patch("/users/:id", updateUsers);
router.delete("/users/:id", deleteUser);

module.exports = router;