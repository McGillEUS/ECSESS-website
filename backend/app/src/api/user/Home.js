/**
 * @description all routes for this specific page. Will be exported to the master router.
 * @author
 */

//IMPORTS
const express = require("express");
const { getNews } = require("../../controller/user/Home");
const router = express.Router();

//ROUTE DEFINITIONS
/* Get all News */
router.get("/news", getNews);

module.exports = router;