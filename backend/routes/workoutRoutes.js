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