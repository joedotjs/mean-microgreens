var mongoose = require ('mongoose');



var blendSchema = new mongoose.Schema({
	name: String, //name of blend e.g. "joe's mega blend"
	micros: [{type: mongoose.Schema.Types.ObjectId, ref: 'Micros'}], //the types of micros stored in array
	review: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}], //the reviews for this blend stored in array
	price: Number //only two prices possible: small or LARGE
});

var Blend = mongoose.model('Blend', blendSchema);

blendSchema.methods.saveBlend = function (params){
	return Blend.create(params);
};
