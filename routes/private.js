const router = require("express").Router();
//const { publicPosts, privatePosts } = require("../database");
const authToken = require("../middleware/authenticateToken");

router.get("/public", (req, res) => {
  res.json(publicPosts);
});

router.get("/private", authToken, (req, res) => {
  res.json({
    result: "successful you have access to private things",
  });
});

module.exports = router;
