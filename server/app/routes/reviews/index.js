var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var blends = mongoose.model('Blend');
var users = mongoose.model('User');
var orders = mongoose.model('Order');
var reviews = mongoose.model('Review');

module.exports = router;

router.get('/', function (req, res, next){
	reviews.find({"_id": req.query.reviewid}, function(err, reviews){
		res.json(reviews);
	});
}); 

// we need to build admin only posting routes 
//create this micro 
router.post('/', function (req, res, next){
	var review = new reviews(req.body);
	review.save(function(err){
		res.status(200).send(review);
	});
});

//edit this micro 
router.put('/:reviewid', function (req, res, next){
	reviews.findOne({"_id": req.params.reviewid}, function(err, review){
		for(var key in req.body){
			review[key] = req.body[key];
		}
		review.save(function(err){
			res.status(200).send(review);
		});
	});
});

//delete this micro
router.delete('/:reviewid', function (req, res, next){
	reviews.findOne({"_id": req.params.reviewid}, function(err, review){
		review.remove(function(err){
			res.status(204).send();
		});
	});
});