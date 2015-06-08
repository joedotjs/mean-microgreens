var mongoose = require ('mongoose');

var reviewSchema = new mongoose.Schema({
	rating: {type: Number, required: true},
	blend: {type: Schema.Types.ObjectId, ref: 'Blend', required: true},
	review: {type: String, required: true},
	title: {type: String},
	user: {type: Schema.Types.ObjectId, ref: 'User'}
	date: Date
})

var Review = mongoose.model('Review', reviewSchema);

module.export = Review;