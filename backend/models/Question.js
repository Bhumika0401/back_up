const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    text: String,
    options: [String],
    category: String
});

module.exports = mongoose.model("Question", questionSchema);