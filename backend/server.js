require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("./config/passport");

const app = express();

// middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

app.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: false,
}));

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

// DB CONNECT
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB error:", err.message));

// ROUTES
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/polls", require("./routes/pollRoutes"));
app.use("/api/questions", require("./routes/questionRoutes"));

// START SERVER
app.listen(process.env.PORT, () => {
  console.log("Server running on " + process.env.PORT);
});