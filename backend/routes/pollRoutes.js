const router = require("express").Router();
const { createPoll, votePoll, getPolls } = require("../controllers/pollController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createPoll);
router.post("/:id/vote", auth, votePoll);
router.get("/", getPolls);

module.exports = router;