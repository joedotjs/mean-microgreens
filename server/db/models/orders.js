var mongoose = require ('mongoose');

var orderSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	contents: [{
		typeofblend: {type: mongoose.Schema.Types.ObjectId, ref: 'Blend'}, 
		quantity: Number
	}],
	status: {type: String, required: true}
})

orderSchema.methods.submitOrder = function (order){
	order.date = new Date();
	return Order.create(order);
}

var Order = mongoose.model('Order', orderSchema);