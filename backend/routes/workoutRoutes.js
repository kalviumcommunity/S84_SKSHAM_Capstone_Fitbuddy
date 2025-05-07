const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout'); 






// POST
router.post('/saveWorkout',async(req,res)=>{
  try {
      const {userId,exercise,duration , caloriesBurned,date}= req.body;
      const newWorkout = new Workout({
          userId,
          exercise,
          duration,
          caloriesBurned,
          date
        });
        const saveWorkout = await  newWorkout.save();
        res.status(201).json(saveWorkout);
  } catch (error) {
      res.status(400).json({message: `Error creating workout`, error});
  }
})


// GET: All workouts
router.get('/getWorkouts', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workouts', error: error.message });
  }
});





// GET: One workout by ID
router.get('/getWorkout/:id', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) return res.status(404).json({ message: 'Workout not found' });

    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workout', error: error.message });
  }
});







//Put :Update Workout by ID
router.put('/updateWorkout/:id',async(req,res)=>{
  const wid = res.params.id;
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      wid,
      {$set: req.body},
      {new: true, runValidators: true}
    );
    
    if (!updatedWorkout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(500).json({message:'Error updating workout',error: error.message});
  }
});




module.exports = router;
