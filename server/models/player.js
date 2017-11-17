var mongoose = require('mongoose');

var PlayerSchema = mongoose.Schema({
	name: {type: String, require: true},
	imgurl: {type: String},
	score: {type:Number}
},{timestamps: true})

mongoose.model('Player',PlayerSchema)