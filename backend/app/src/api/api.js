/**
 * @description Central API class for admin routes for convenient export to api.js
 * @author Ricky Liu
 */

const express = require("express");

//admin routers
const api = express.Router();

const admin = require("./admin/adminapi");
const user = require("./user/userapi");

api.use("/admin", admin);
api.use("/user", user);

module.exports = api;