"use strict";
let Models = require("../models"); //matches index.js

const getPosts = (res) => {
  //finds all users
  Models.Post.find()
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch(function (err) {
      console.log(err);
    });
};

const createPosts = (data, res) => {
  //creates a new user using JSON data POSTed in request body;
  console.log(data);
  // write validation for user id (INSERT CODE HERE)
  new Models.Post(data)
    .save()
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getPosts,
  createPosts,
};
