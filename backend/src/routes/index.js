const express = require("express");
const router = express.Router();
const userRouters = require("./users");
router.route("/").get((req, res) => {
  res.json("Hello from the router");
});

router.use("/users", userRouters);

module.exports = router;
