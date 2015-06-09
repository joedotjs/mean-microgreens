var mongoose = require ('mongoose');

var microsSchema = new mongoose.Schema({
	name: {type: String, required: true},
	spice: {type: String, required: true},
	price: {type: Number, required: true},
	info: {type: String, required: true},
	inventory: {type: Number, required: true},
	available: {type: Boolean, required: true}
});

microSchema.methods.addMicro = function (params){
	return Micros.create(params);
}

var Micros = mongoose.model('Micros', microSchema);