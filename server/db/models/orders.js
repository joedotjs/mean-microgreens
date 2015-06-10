var mongoose = require ('mongoose');

var orderSchema = new mongoose.Schema({
	blend: [{
		typeofblend: {type: mongoose.Schema.Types.ObjectId, ref: 'Blends'}, 
		quantity: Number
	}],
	status: {type: String, enum: ['created', 'processing', 'cancelled', 'completed'],required: true}
})

var Order = mongoose.model('Order', orderSchema);
