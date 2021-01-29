/**
 * @description The configuration variables which will be exported to server.js
 * @author Ricky Liu
 */

require("dotenv").config();

const {
    PORT,
    BACKEND_DOMAIN,
    DATABASE_URL,
} = process.env;

const config = {
    backend: {
        PORT,
        BACKEND_DOMAIN,
    },
    database: {
        DATABASE_URL,
    },
};

module.exports = config;