"use strict";
let Models = require("../models"); //matches index.js

const getUsers = (res) => {
  //finds all users
  Models.User.find()
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch(function (err) {
      console.log(err);
    });
};

const createUser = (data, res) => {
  //creates a new user using JSON data POSTed in request body;
  console.log(data);
  new Models.User(data)
    .save()
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getUsers,
  createUser,
};
