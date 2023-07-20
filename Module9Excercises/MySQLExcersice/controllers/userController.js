"use strict";
const Models = require("../models");
const getUsers = (res) => {
  Models.User.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createUsers = (data, res) => {
  Models.User.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const updateUserById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.send({ result: 400, stauts: false, message: "id is required" });
  }
  //Update user
  const data = await Models.User.update(req.body, {
    where: {
      id: id,
    },
  });

  if (!data) {
    res.send({ result: 400, stauts: false, message: "Failed to update user" });
  }
  res.send({
    result: 200,
    stauts: true,
    message: "Update user succesfully",
  });
};

const deleteUserById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.send({ result: 400, stauts: false, message: "id is required" });
  }

  const data = await Models.User.destroy({
    where: {
      id: id,
    },
  });

  if (!data) {
    res.send({ result: 400, stauts: false, message: "Failed to delete user" });
  }
  res.send({
    result: 200,
    stauts: true,
    message: "Delete user succesfully",
  });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  Models.User.findByPk(id)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
module.exports = {
  getUsers,
  createUsers,
  updateUserById,
  deleteUserById,
  getUserById,
};