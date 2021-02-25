/**
 * @description Entry file for backend. 
 * @author Ricky Liu
 */

/**
 * IMPORTS
 */

//important imports
const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./api/api");
const config = require("./config/config");
const sequelize = require("./sequelize");
const { Sequelize } = require("sequelize");

//helper module imports

/**
 * MIDDLEWARE
 */

const app = express();

//CORS
app.use(
    cors({
        origin: config.backend.BACKEND_DOMAIN,
        methods: "GET,PUT,POST,DELETE",
    })
);

//BODYPARSER
app.use(bodyParser.json());

//API ROUTES
app.use("/api", router);

//CONNECT TO STATIC FRONTEND BUILD
//const FRONTENDPATH = "../../../frontend/ecsess-website/build";
//app.use(express.static(FRONTENDPATH));

//GET STATIC FRONTEND ON BASE API CALL
app.get("/", (req, res) => {
    res.send("Hi!");
});

//initialize sequelize
module.exports = sequelize(Sequelize, config);

//START SERVER FOR API
const server = http.createServer(app);
const PORT = config.backend.TESTPORT; //change this for different builds
server.listen(PORT, () => {
    console.log(`Server is currently running on port ${PORT}`);
})