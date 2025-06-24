// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require('./model/User')

// Create express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// MongoDB connection string (replace 'fitbuddy' with your DB name)
mongoose.connect("mongodb://localhost:27017/Login", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB connected successfully");
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Default route
app.get("/", (req, res) => {
  res.send("Hello from FitBuddy backend!");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch(err => res.status(500).json("Error: " + err));
});

app.post('/register',(req,res)=>{
     User.create(req.body)
     .then(employees => res.json(employees))
     .catch(err => res.json(err));
})

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
