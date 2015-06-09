var mongoose = require ('mongoose');

var orderSchema = new mongoose.Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	contents: [{type: Schema.Types.ObjectId, ref: 'Blend'}],
	status: {type: String, required: true}
})

orderSchema.methods.submitOrder = function (order){
	order.date = new Date();
	return Order.create(order);
}

var Order = mongoose.model('Order', OrderSchema);