var mongoose = require ('mongoose');



var blendSchema = new mongoose.Schema({
	name: {type: String},
	micros: [{type: Schema.Types.ObjectId, ref: 'Micros'}],
	review: [{type: Schema.Types.ObjectId, ref: 'Review'}],
	price: {type: Number}
})

var Blend = mongoose.model('Blend', blendSchema);