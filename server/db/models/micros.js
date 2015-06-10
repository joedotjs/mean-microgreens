var mongoose = require ('mongoose');

var microsSchema = new mongoose.Schema({
	name: String, //name of veggie
	spice: String, //spice level
	price: Number, //price (if we want to sell by bulk later)
	info: { // information and picture of veggie
		background: String,
		image: String
	},
	inventory: Number, //how much we have in stock
	available: Boolean, //if it is in stock at all.
});

var Micros = mongoose.model('Micros', microsSchema);

microsSchema.methods.addMicro = function (params){
	return Micros.create(params);
}
