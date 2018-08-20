
var express = require('express');
var router = express.Router();
var model = require('../models/index');
 

/* GET boats listing. */
router.get('/', function (req, res, next) {
    model.boat.findAll({})
        .then(boats => res.json({
            error: false,
            data: boats
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

router.get('/:id', function (req, res, next) {
    model.boat.findAll({ where: {
    id: req.params.id
  }})
        .then(boat => res.json({
            error: false,
            data: boat
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 

module.exports = router;


