var mongoose = require ('mongoose');

var reviewSchema = new mongoose.Schema({
	rating: {type: Number, required: true}, // 1-5 (5 is best)
	// blend: {type: Schema.Types.ObjectId, ref: 'Blend', required: true}, not sure if we need blend in reviews, since it's referenced in blends
	review: {type: String, required: true}, // commented review
	title: String, //review title
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, //user who left the review
	date: Date //date review was created.
})

var Review = mongoose.model('Review', reviewSchema);