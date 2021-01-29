/**
 * @description The configuration variables which will be exported to server.js
 * @author Ricky Liu
 */

require("dotenv").config();

const {
    PORT,
    TESTPORT,
    BACKEND_DOMAIN,
    DATABASE_URL,
} = process.env;

const config = {
    backend: {
        PORT,
        TESTPORT,
        BACKEND_DOMAIN,
    },
    database: {
        DATABASE_URL,
    },
};

module.exports = config;