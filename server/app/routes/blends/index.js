var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Blends = mongoose.model('Blends');

module.exports = router;

// get all blends
router.get('/', function (req, res, next){
	Blends.find({}).exec()
	.then(
		function (blends){
			res.json(blends);
		}, 
		function (err){
			next(err);
		}
	);
});

//get blend with blendid 
router.get('/:blendid', function (req, res, next){
	Blends.findById(req.params.blendid).exec()
	.then(
		function (blend){
			res.json(blend);
		},
		function (err){
			next(err);
		}
	);
});

// we need to build admin only posting routes
// creates new blend and returns new blend
router.post('/', function (req, res, next){
	var blend = new Blends(req.body);
	blend.save(function (err){
		res.status(200).send(blend);
	});
});

//edits this blend
router.put('/:blendid', function (req, res, next){
	Blends.findByIdAndUpdate(req.params.blendid, req.body).exec()
	.then(
		function (blend){
			res.status(200).send(blend);
		},
		function (err){
			next(err);
		}
	);
});

// delete this blend
router.delete('/:blendid', function (req, res, next){
	Blends.findByIdAndRemove(req.params.blendid).exec()
	.then(
		function (){
			res.status(204).send();
		},
		function (err){
			next(err);
		}
	);
});