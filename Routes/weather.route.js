const express = require('express');
const weatherRouter = express.Router();

weatherRouter.get('/', (req, res) => {
    var resJSON = {
        "res" : "I'm weather."
    }
    res.json(resJSON);
})

weatherRouter.get('/asia', (req, res) => {
    var resJSON = {
        "res" : "love from asia."
    }
    res.json(resJSON);
})

module.exports = weatherRouter;