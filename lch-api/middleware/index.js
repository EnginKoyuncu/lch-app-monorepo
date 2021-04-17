const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const registerMiddleware = (app) => {

    // open for all domains to fetch this API
    if (process.env.ENV === 'production') {
        const corsOptions = {
            origin: process.env.APP_URL,

            optionsSuccessStatus: 200,
        };

        app.use(cors(corsOptions));
    } else {
        app.use(cors());
    }


    app.use(express.json());
    app.use(express.urlencoded({
    extended: true,
    }))

    // helmet security (hide your api elements from hacker)

    app.use(helmet.noSniff());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.xssFilter());

};

module.exports = {
    registerMiddleware
}