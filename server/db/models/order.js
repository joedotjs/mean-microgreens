var mongoose = require ('mongoose');

var orderSchema = new mongoose.Schema({
	blend: [{
		typeofblend: {type: mongoose.Schema.Types.ObjectId, ref: 'Blend'}, 
		quantity: Number
	}],
	orderstatus: {type: String, enum: ['created', 'processing', 'cancelled', 'completed'], required: true, default: "created"}
});

orderSchema.methods.changeStatus = function (status){
	this.orderstatus = status;
	return this;
}

orderSchema.methods.cancelOrder = function () {
	if (this.orderstatus !== 'completed') this.orderstatus = 'cancelled';
	return this;
}

var Order = mongoose.model('Order', orderSchema);
