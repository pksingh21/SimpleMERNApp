const UserController = require("../controllers/userController");
const express = require("express");
const UserRouter = express.Router();
UserRouter.route("/")
  .get(UserController.GetAllUsers)
  .post(UserController.CreateTour)
UserRouter.route("/iitbbs").get(UserController.GetBBSUsers)
module.exports = UserRouter;


