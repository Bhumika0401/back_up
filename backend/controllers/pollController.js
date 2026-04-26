const Poll = require("../models/Poll");

// exports.createPoll = async (req, res) => {
//     const { question, options } = req.body;

//     const poll = await Poll.create({
//         question,
//         options: options.map(opt => ({ text: opt })),
//         createdBy: req.user.id
//     });

//     res.json(poll);
// };
exports.createPoll = async (req, res) => {
  try {
    const { question, type, options } = req.body;

    const poll = new Poll({
      question,
      type,
      options,
      createdBy: req.user.id // 🔥 important
    });

    await poll.save();

    res.json(poll);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
exports.votePoll = async (req, res) => {
    const { optionIndex } = req.body;

    const poll = await Poll.findById(req.params.id);
    poll.options[optionIndex].votes++;

    await poll.save();

    res.json(poll);
};

exports.getPolls = async (req, res) => {
    const polls = await Poll.find();
    res.json(polls);
};