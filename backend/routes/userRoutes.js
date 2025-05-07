const express = require('express');
const router = express.Router();

const User = require('../models/Ussers'); 


// GET: All users
router.get('/getUsers', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching users',
      
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





// put or update


router.put('/updateUser/:id', async (req, res) => {
  const uid = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      uid,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: `User not found` });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
});




 

module.exports = router;
