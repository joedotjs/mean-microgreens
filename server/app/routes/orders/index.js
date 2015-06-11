var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = router;

// get all Orders
router.get('/', function (req, res, next){
	Order.find({}).exec()
	.then(
		function (orders){
			res.json(orders);
		}, 
		function (err){
			next(err);
		}
	);
});

//get order with orderid 
router.get('/:orderid', function (req, res, next){
	Order.findById(req.params.orderid).exec()
	.then(
		function (order){
			res.json(order);
		},
		function (err){
			next(err);
		}
	);
});

// we need to build admin only posting routes
// creates new order and returns new order
router.post('/', function (req, res, next){
	var order = new Order(req.body);
	order.save(function(err){
		res.status(200).send(order);
	});
}); 

//edits this order
router.put('/:orderid', function (req, res, next){
	Order.findByIdAndUpdate(req.params.orderid, req.body).exec()
	.then(
		function (order){
			res.status(200).send(order);
		},
		function (err){
			next(err);
		}
	);
});

// delete this order
router.delete('/:orderid', function (req, res, next){
	Order.findByIdAndRemove(req.params.orderid).exec()
	.then(
		function (){
			res.status(204).send();
		},
		function (err){
			next(err);
		}
	);
});
