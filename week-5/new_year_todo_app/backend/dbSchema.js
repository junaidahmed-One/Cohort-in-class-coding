const mongoose = require("mongoose");
const config = require("../backend/mongoDetails");
mongoose.connect(config.connection);

const todoSchema = mongoose.Schema({
	id: Number,
	title: String,
	description: String,
	completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
	todo,
};
