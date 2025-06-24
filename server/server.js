require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require('./model/User');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Hello from FitBuddy backend!");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(404).json("No record existed");
      if (user.password !== password) return res.status(401).json("The password is incorrect");
      res.json("Success");
    })
    .catch(err => res.status(500).json("Error: " + err));
});

app.post("/register", (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(500).json("Error: " + err));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
