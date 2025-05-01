const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Workout = require('../models/Workout'); // ✅ Added missing import

// POST

router.post('/saveUser', async (req, res) => {
  try {
    const { name, email, password, age, gender } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      age,
      gender,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({
      message: 'Error creating user',
      error: error.message,
    });
  }
});


module.exports = router;
