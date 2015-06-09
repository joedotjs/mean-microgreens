var mongoose = require ('mongoose');

var orderSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	contents: [{
		typeofblend: {type: mongoose.Schema.Types.ObjectId, ref: 'Blend'}, 
		quantity: Number
	}],
	status: {type: String, required: true}
})

var Order = mongoose.model('Order', orderSchema);

orderSchema.methods.submitOrder = function (order){
	order.dateOrdered = new Date();
	return Order.create(order);
}
