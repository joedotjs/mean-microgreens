var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var orders = mongoose.model('Order');

module.exports = router;

router.get('/', function (req, res, next){
	if(req.query.orderid){
		orders.find({"_id": req.query.orderid}, function(err, orders){
			res.json(orders);
		});
	} else {
		orders.find({}, function(err, orders){
			res.json(orders);
		});
	}
}); 

// we need to build admin only posting routes 
//create this order 
router.post('/', function (req, res, next){
	var order = new orders(req.body);
	order.save(function(err){
		res.status(200).send(order);
	});
});

//edit this order 
router.put('/:orderid', function (req, res, next){
	orders.findOne({"_id": req.params.orderid}, function(err, order){
		for(var key in req.body){
			order[key] = req.body[key];
		}
		order.save(function(err){
			res.status(200).send(order);
		});
	});
});

//delete this order
router.delete('/:orderid', function (req, res, next){
	orders.findOne({"_id": req.params.orderid}, function(err, order){
		order.remove(function(err){
			res.status(204).send();
		});
	});
});




