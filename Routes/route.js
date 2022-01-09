const express = require('express');
const router = express.Router();

const weatherRouter = require('./weather.route');

router.get('/', (req, res) => {
    var resJSON = {
        "res" : "I'm route."
    }
    res.json(resJSON);
})

router.use('/weather', weatherRouter);

module.exports = router;