const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');






// GET all workouts
router.get('/getWorkouts', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts); // ✅ fixed
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workouts', error: error.message });
  }
});

// GET a single workout by ID
router.get('/getWorkout/:id', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) return res.status(404).json({ message: 'Workout not found' });

    res.json(workout); // ✅ fixed
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workout', error: error.message });
  }
});

module.exports = router;
