/**
 * @description all routes for this specific page. Will be exported to the master router.
 * @author
 */

//IMPORTS
const express = require("express");
const { getCategories, postEvent, getCategoryByName } = require("../../controller/admin/Events");
const router = express.Router();

//ROUTE DEFINITIONS
/* Get event categories */
router.get("/categories", getCategories);
/* Post event */
router.post("/", postEvent)
/* Get event category */
router.get("/category/:name", getCategoryByName);

module.exports = router;