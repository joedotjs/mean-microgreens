var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Blends = mongoose.model('Blends');

module.exports = router;

// get all blends if there is a query for a specific blend, get that blend
router.get('/', function (req, res, next){
	if(req.query.blendid){
		Blends.find({"_id": req.query.blendid}, function(err, blend){
			res.json(blend);
		});
	} else {
		Blends.find({}, function(err, blends){
			res.json(blends);
		});
	}
}); 

// we need to build admin only posting routes
// creates new blend and returns new blend
router.post('/', function (req, res, next){
	var blend = new Blends(req.body);
	blend.save(function(err){
		res.status(200).send(blend);
	});
});

//edits this blend
router.put('/:blendid', function (req, res, next){
	Blends.findOne({"_id": req.params.blendid}, function(err, blend){
		for(var key in req.body){
			blend[key] = req.body[key];
		}
		blend.save(function(err){
			res.status(200).send(blend);
		});
	});
});

// delete this blend
router.delete('/:blendid', function (req, res, next){
	Blends.findById(req.params.blendid, function(err, blend){
		blend.remove(function(err){
			res.status(204).send();
		});
	});
});