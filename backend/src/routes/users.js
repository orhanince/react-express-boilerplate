const express = require("express");
const usersRouter = express.Router();

usersRouter.route("/").get((req, res) => {
  res.json([{ name: "Foo" }, { name: "Bar" }, { name: "FooBar" }]);
});

usersRouter.route("/:id").get((req, res) => {
  res.send(`current user id is ${req.params.id}`);
});

module.exports = usersRouter;
