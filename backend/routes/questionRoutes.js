const router = require("express").Router();
const Question = require("../models/question");

router.get("/", async (req, res) => {
  const data = await Question.find();
  res.json(data);
});

module.exports = router;