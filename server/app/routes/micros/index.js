var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Micros = mongoose.model('Micros');

module.exports = router;

// get all Micros
router.get('/', function (req, res, next){
	Micros.find({}).exec()
	.then(
		function (micros){
			res.json(micros);
		}, 
		function (err){
			next(err);
		}
	);
});

//get micro with microid 
router.get('/:microid', function (req, res, next){
	Micros.findById(req.params.microid).exec()
	.then(
		function (micro){
			res.json(micro);
		},
		function (err){
			next(err);
		}
	);
});

//get micro with microname
router.get('/name/:microname', function (req, res, next){
	Micros.findOne({name: req.params.microname}).exec()
	.then(
		function (micro){
			res.json(micro);
		},
		function (err){
			next(err);
		}
	);
});


// we need to build admin only posting routes
// creates new micro and returns new micro
router.post('/', function (req, res, next){
	var micro = new Micros(req.body);
	micro.save(function(err){
		res.status(200).send(micro);
	});
}); 

//edits this micro
router.put('/:microid', function (req, res, next){
	Micros.findByIdAndUpdate(req.params.microid, req.body).exec()
	.then(
		function (micro){
			res.status(200).send(micro);
		},
		function (err){
			next(err);
		}
	);
});

// delete this micro
router.delete('/:microid', function (req, res, next){
	Micros.findByIdAndRemove(req.params.microid).exec()
	.then(
		function (){
			res.status(204).send();
		},
		function (err){
			next(err);
		}
	);
});
