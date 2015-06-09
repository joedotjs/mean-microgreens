var mongoose = require ('mongoose');

var microsSchema = new mongoose.Schema({
	name: {type: String, required: true}, //name of veggie
	spice: {type: String, required: true}, //spice level
	price: {type: Number, required: true}, //price (if we want to sell by bulk later)
	info: { // information and picture of veggie
		background: {type: String, required: true},
		image: String
	},
	inventory: {type: Number, required: true}, //how much we have in stock
	available: {type: String, required: true}, //if it is in stock at all.
});

var Micros = mongoose.model('Micros', microsSchema);

microsSchema.methods.addMicro = function (params){
	return Micros.create(params);
}
