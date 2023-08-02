const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


// router.get("/", (req, res) => {
//   Controllers.userController.getUsers(res);
// });

router.post("/signup", (req, res) => {
  Controllers.userController.createUsers(req.body, res);
});

router.post("/login", (req, res) => {
  Controllers.UserController.loginUser(req.body, res);
});

// router.put("/update/:id", (req, res) => {
//   Controllers.userController.updateUserById(req, res);
// });

// router.delete("/delete/:id", (req, res) => {
//   Controllers.userController.deleteUserById(req, res);
// });

// router.get("/:id", (req, res) => {
//   Controllers.userController.getUserById(req, res);
// });

module.exports = router;
