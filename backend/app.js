const express = require("express");
const passpot = require('passport')
const cookieSession = require('cookie-session')
const morgan = require("morgan");
const app = express();
const cors = require("cors")
const authRoutes = require("./Routers/authRouter")
const UserRouter = require("./Routers/userRouter");
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieSession({
  name:"session",
  keys:["DungeonGamer69"],
  maxAge:24*60*60*100,
}))
app.use(passpot.initialize());
app.use(passpot.session());
app.use(cors({
  origin :"http://localhost:3000",
  methods : "GET,POST,PUT,DELETE",
  credentials : true,
}))
app.use(express.json());
app.use("/auth",authRoutes);
app.use(`/api/v1/users`, UserRouter);
module.exports = app;


