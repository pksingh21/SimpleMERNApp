const User = require('../Models/userModel')
const express = require('express')
const GetAllUsers = async (req, res) => {
  try {
    const AllUsers = await User.find()
    res.status(200).json({
      status: "success",
      result: AllUsers
    })
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      result: err
    })

  }
}
const GetBBSUsers = async (req, res) => {
  try {
    const BBSUsers = await User.aggregate([{
      $match:
        {$expr: {$gt: [{$indexOfCP: ["$email", "iitbbs.ac.in"]}, -1]}}
    }, {$project: {email: 1, name: 1, photo: 1, phoneNumber: 1, institute: 1, branch: 1, year: 1, city: 1, caref: 1, id: 1, wissId: 1, googleid: 1, accesstoken: 1}}])
    res.status(201).json({
      status: "BBS Users Found",
      data: BBSUsers
    })
  } catch (err) {
    res.status(404).json({
      status: "BBS Users Not Found",
      error: err
    })

  }
}
const CreateTour = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "User Created Successfully!",
      data: newUser
    })
  } catch (err) {
    res.status(404).json({
      status: "User Creation Failed",
      Error: err
    })

  }
}
module.exports = {
  CreateTour,
  GetAllUsers,
  GetBBSUsers
}
