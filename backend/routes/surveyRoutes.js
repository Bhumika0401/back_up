const router = require("express").Router();
const { createSurvey, getSurvey } = require("../controllers/surveyController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createSurvey);
router.get("/:id", auth, getSurvey);

module.exports = router;