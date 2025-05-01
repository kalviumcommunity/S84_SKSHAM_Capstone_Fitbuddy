const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// POST: Create a new workout
router.post('/saveWorkout', async (req, res) => {
  try {
    const { userId, exercise, duration, caloriesBurned, date } = req.body;

    const newWorkout = new Workout({
      userId,
      exercise,
      duration,
      caloriesBurned,
      date // optional; will default to Date.now if not provided
    });

    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    res.status(400).json({ message: 'Error creating workout', error });
  }
});

module.exports = router;
