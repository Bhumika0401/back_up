const Survey = require("../models/Survey");
const Question = require("../models/Question");

exports.createSurvey = async (req, res) => {
    const { title, category, questions } = req.body;

    const survey = await Survey.create({
        title,
        category,
        questions,
        createdBy: req.user.id
    });

    res.json(survey);
};

// RANDOM 10 QUESTIONS
exports.getSurvey = async (req, res) => {
    let survey = await Survey.findById(req.params.id).populate("questions");

    const shuffled = survey.questions.sort(() => 0.5 - Math.random());
    survey.questions = shuffled.slice(0, 10);

    res.json(survey);
};