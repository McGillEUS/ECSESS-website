/**
 * @description all routes for this specific page. Will be exported to the master router.
 * @author
 */

//IMPORTS
const express = require("express");
const { getEvents, getEvent, getEventsByCategory, getCategories } = require("../../controller/user/Events");
const router = express.Router();

//ROUTE DEFINITIONS
/* GET all events */
router.get("/", getEvents);
/* Get event by id */
router.get("/:id", getEvent);
/* Get event by event category id*/
router.get("/bycategory/:id", getEventsByCategory);


/* Get event categories */
router.get("/categories", getCategories);

module.exports = router;