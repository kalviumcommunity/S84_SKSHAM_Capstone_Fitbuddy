// POST a new workout

router.post('/saveWorkout',async(req,res)=>{
    try {
        const {newId,exercise,duration , caloriesBurned,date}= req.body;
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
const express = require ('express');
const router = express.Router();
const User = require('../models/User');









// GET all users

router.get('/getUser', async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    } catch (error){
        res.status(500).json({message : 'Error fetching workouts', error});
    }
})

// GET a single user by ID
router.get('/getUser/:id',async(req,res)=>{
  try {
    const user = await User.findById(req.params.id);
    if(!user) returnvres.status(400).json({message: 'User not found'});
  } catch (error) {
    res.status(500).json({message:`Error fetching user`,error});
  }  
})



module.exports = router;