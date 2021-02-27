/**
 * @description all routes for this specific page. Will be exported to the master router.
 * @author
 */

//IMPORTS
const express = require("express");
const { postNews, deleteNews, updateNews, getNews, getNewsById } = require("../../controller/admin/Home");
const router = express.Router();

//ROUTE DEFINITIONS
/* Post News */
router.post("/news", postNews);

/* Update News */
router.put("/news/:id", updateNews);

/* Get all News */
router.get("/news", getNews);

/* Get News by Id */
router.get("/news/:id", getNewsById);

/* Delete News */
router.delete("/news/:id", deleteNews);

module.exports = router;