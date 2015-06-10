var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var micros = mongoose.model('Micros');

module.exports = router;

//Get all micros or specific micro
router.get('/', function (req, res, next){
	if(req.query.microid){
		micros.find({"_id": req.query.microid}, function(err, micros){
			res.json(micros);
		});
	} else {
		micros.find({}, function(err, micros){
			res.json(micros);
		});
	}
}); 

// we need to build admin only posting routes 
router.post('/', function (req, res, next){
	var micro = new micros(req.body);
	micro.save(function(err){
		res.status(200).send(micro);
	});
});

router.put('/:microid', function (req, res, next){
	micros.findOne({"_id": req.params.microid}, function(err, micro){
		for(var key in req.body){
			micro[key] = req.body[key];
		}
		micro.save(function(err){
			res.status(200).send(micro);
		});
	});
});

router.delete('/:microid', function (req, res, next){
	micros.findOne({"_id": req.params.microid}, function(err, micro){
		micro.remove(function(err){
			res.status(204).send();
		});
	});
});