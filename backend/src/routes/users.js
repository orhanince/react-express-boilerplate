const express = require("express");
const UserController = require("./../controllers/user-controller");
const usersRouter = express.Router();

usersRouter.get("/", UserController.getUsers);

usersRouter.get("/:id", UserController.getUser);

module.exports = usersRouter;
