//router tells the api endpoint
"use strict";
var express = require("express");
var router = express.Router();
//controller register
const operartioncontroller = require("../controllers/operationController.js");
//root operation
router.get("/", (req, res) => {
  res.send('Module 5 excersices');
});
//operation
//addition endpoint - get request
router.get("/add", (req, res) => {
  operartioncontroller.addition(req,res);
});
//substraction endpoint - get request
router.get("/subs", (req, res) => {
  operartioncontroller.substraction(req, res);
});
//addition endpoint - get request
router.get("/mult", (req, res) => {
  operartioncontroller.multiply(req, res);
});
//addition endpoint - get request
router.get("/div", (req, res) => {
  operartioncontroller.divide(req, res);
});

module.exports = router;
