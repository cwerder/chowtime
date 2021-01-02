var express = require('express');
var router = express.Router();
var foodModel = require('../database/models').FoodModel;

router.get('/*', (req, res) => {
    foodModel.find({}, (err, result) => {
        res.json(result[0].toObject()[req.path.substring(1)]);
    });
});

module.exports = router;