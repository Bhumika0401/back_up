const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    survey: { type: mongoose.Schema.Types.ObjectId, ref: "Survey" },
    answers: [{
        questionId: String,
        selectedOption: String
    }]
});

module.exports = mongoose.model("Response", responseSchema);