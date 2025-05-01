const express = require ('express');
const router = express.Router();
const User = require('../models/User');




// GET all users

router.get('/save', async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    } catch (error){
        res.status(500).json({message : 'Error fetching workouts', error});
    }
})

module.exports = router;