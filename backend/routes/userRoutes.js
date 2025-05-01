const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');







//get all workouts
router.get('/getWorkout',async(req,res)=>{
    try {
        const workouts= await Workout.find();
        req.json(workouts);
    } catch (error) {
        res.status(500).json({message : 'Error fetching workout', error});
    }
});
module.exports= router