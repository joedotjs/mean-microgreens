'use strict';

var mongoose = require ('mongoose');

var blendsSchema = new mongoose.Schema({
	name: {type: String, required: true}, //name of blend e.g. "joe's mega blend"
	micros: [{type: mongoose.Schema.Types.ObjectId, ref: 'Micros'}], //the types of micros stored in array
	reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}], //the reviews for this blend stored in array
	price: {type: Number, require: true} //only two prices possible: small or LARGE
});

var Blends = mongoose.model('Blends', blendsSchema);
