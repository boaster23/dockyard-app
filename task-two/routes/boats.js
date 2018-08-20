
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
    model.boat.hasMany(model.boat_worker, {foreignKey: 'boat_id'})
    model.boat_worker.belongsTo(model.boat, {foreignKey: 'boat_id'})
    model.boat_worker.findAll({ where: { boat_id: req.params.id}, include: [model.boat]})
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


