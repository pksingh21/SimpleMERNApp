const dotenv = require('dotenv')
const express = require("express");
dotenv.config({path: "./.env"});
const app = require("./app");
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB Successfully connected");
  });
app.listen(port, () => {
  console.log(`listening on ${port}`);
});


