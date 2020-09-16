const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({
	name: String,
	imgurl: String,
});

const cards = mongoose.model("cards", CardSchema);

module.exports = cards;
