/**
 * @description Central API class for admin routes for convenient export to api.js
 * @author Ricky Liu
 */

const express = require("express");

//admin routers
const api = express.Router();

const council = require("./Council")
const events = require("./Events")
const funds = require("./Funds")
const fyc = require("./FYC")
const home = require("./Home")
const information = require("./Information")
const merch = require("./Merch")
const photos = require("./Photos")
const resources = require("./Resources")
const studentspaces = require("./StudentSpaces")

api.use("/council", council);
api.use("/events", events);
api.use("/funds", funds);
api.use("/fyc", fyc);
api.use("/home", home);
api.use("/information", information);
api.use("/merch", merch);
api.use("/photos", photos);
api.use("/resources", resources);
api.use("/studentspaces", studentspaces);

module.exports = api;