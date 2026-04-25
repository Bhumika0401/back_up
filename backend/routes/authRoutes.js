const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const passport = require("passport");

const {
  register,
  login,
  verify,
  logout,
} = require("../controllers/authController");

// normal auth routes
router.post("/register", register);
router.post("/login", login);
router.get("/verify", auth, verify);
router.get("/logout", logout);

// google auth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3000/home");
  }
);
module.exports = router;