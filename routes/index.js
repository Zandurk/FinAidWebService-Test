var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/program', function (req, res, next) {
    res.send(
        {
            currentProgram: '16:8',
            eatStartTime: 12,
            eatEndTime: 20,
            totalEatHours: 8,
            totalFastHours: 16
        }
    );
});

module.exports = router;
