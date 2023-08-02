let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});
router.get("/getPosts", (req, res) => {
    Controllers.userController.getPosts(res);
  });
  
  router.post("/createPosts", (req, res) => {
    Controllers.userController.createPosts(req.body, res);
  });
module.exports = router;
