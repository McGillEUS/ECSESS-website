/**
 * @description all routes for this specific page. Will be exported to the master router.
 * @author
 */

//IMPORTS
const express = require("express");
const { postAcademicEmail } = require("../../controller/user/Resources");
const router = express.Router();

//ROUTE DEFINITIONS
/* Send an academic email */
router.post("/academic/email", postAcademicEmail);

module.exports = router;