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



module.exports = router;
