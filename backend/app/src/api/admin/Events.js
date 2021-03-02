/**
 * @description all routes for this specific page. Will be exported to the master router.
 * @author
 */

//IMPORTS
const express = require("express");
const { getCategories, postEvent, getCategoryByName, postCategory } = require("../../controller/admin/Events");
const router = express.Router();

//ROUTE DEFINITIONS
/* Get event categories */
router.get("/categories", getCategories);
/* Post event */
router.post("/", postEvent)
/* Get event category by name */
router.get("/category/:name", getCategoryByName);
/* Post event category */
router.post("/category", postCategory);

module.exports = router;