const express = require('express');
const router = express.Router();
const User = require('../models/User');

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

// GET: Single user by ID 
router.get('/getUser/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: 'User not found' });
    res.json({user});
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching user',
      error: error.message,
    });
  }
});


module.exports = router;
