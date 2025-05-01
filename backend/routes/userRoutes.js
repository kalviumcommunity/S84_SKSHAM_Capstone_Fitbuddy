const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// post new user 

router.post('/saveUser', async(req,res)=>{
    try {
        const {name,email,password,gender} =req.body;
        const newUser = new User({
            name,
            email,
            password,
            age,
            gender
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({message : `Error creating user`,error})
    }
})




//get all workouts
router.get('/getWorkouts',async(req,res)=>{
    try {
        const workouts= await Workout.find();
        req.json(workouts);
    } catch (error) {
        res.status(500).json({message : 'Error fetching workout', error});
    }
});





// GET a single workout by ID
router.get('/getWorkout/:id',async(req,res)=>{
    try {
        const workout = await Workout.findById(req.params.id);
        if(!workout) return res.status(404).json({message : 'Workout not found'});
    } catch (error) {
        res.status(500).json({message: `Error fetching workout`, error});
    }
});




module.exports= router