/**
 * @description all routes for this specific page. Will be exported to the master router.
 * @author
 */

//IMPORTS
const express = require("express");
const { getNews, postLivewireEmail } = require("../../controller/user/Home");
const router = express.Router();
const { uploadToAssets } = require('../../server');

//ROUTE DEFINITIONS
/* Get all News */
router.get("/news", getNews);

/* send email to livewire */
router.post("/livewire/email", uploadToAssets.single('image') , postLivewireEmail);

module.exports = router;