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
const config = require("./config/config");
const sequelize = require("./sequelize");
const { Sequelize } = require("sequelize");
const serverless = require("serverless-http");
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

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

//configure s3
aws.config.update({
    secretAccessKey: config.aws.AWSSECRET,
    accessKeyId: config.aws.AWSACCESSKEY,
    region: 'us-east-2'
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'ecsess-website',
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + file.originalname)
        }
      })
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'assets/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname) //Appending .jpg
    }
})

const uploadToAssets = multer({
    storage: storage
})

//initialize sequelize
const models = sequelize(Sequelize, config);
console.log(models);
module.exports = { models, upload, uploadToAssets};

//API ROUTES
const router = require("./api/api");
app.use("/api", router);

//CONNECT TO STATIC FRONTEND BUILD
//const FRONTENDPATH = "../../../frontend/ecsess-website/build";
//app.use(express.static(FRONTENDPATH));

//GET STATIC FRONTEND ON BASE API CALL
app.get("/", (req, res) => {
    res.send("Hi!");
});

//START SERVER FOR API
//const server = http.createServer(app);
const PORT = process.env.PORT || config.backend.PORT; //change this for different builds
app.listen(PORT, () => {
    console.log(`Server is currently running on port ${PORT}`);
})

module.exports.handler = serverless(app);