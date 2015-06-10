var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var blends = mongoose.model('Blend');
var UserModel = mongoose.model('User');

module.exports = router;


function hasAdminPower(){
	if (req.user.admin === true);
	else res.status(403);
}

function isAuthenticated (req, res, next) {
	//want to work for passport and local login
	//req.session.userId
	if (req.user) next();
	else res.status(403);
}

// get all blends if there is a query for a specific blend, get that blend
router.get('/', function (req, res, next){
	if(req.query.blendid){
		blends.find({"_id": req.query.blendid}, function(err, blends){
			res.json(blends);
		});
	} else {
		blends.find({}, function(err, blends){
			res.json(blends);
		});
	}
}); 

// we need to build admin only posting routes
// creates new blend and returns new blend
router.post('/', function (req, res, next){
	console.log('this is the req.user : ', req.user); //comes undefined
	var blend = new blends(req.body);
	blend.save(function(err){
		res.status(200).send(blend);
	});
});

//edits this blend
router.put('/:blendid', function (req, res, next){
	blends.findOne({"_id": req.params.blendid}, function(err, blend){
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
	blends.findById(req.params.blendid, function(err, blend){
		blend.remove(function(err){
			res.status(204).send();
		});
	});
});