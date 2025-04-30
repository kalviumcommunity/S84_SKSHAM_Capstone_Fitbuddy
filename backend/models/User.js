const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required:[true , 'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique: true
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    age:{
        type:Number,
        default:null,
    },
    gender:{
        type:String,
        enum:['male','female','other'],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
}, {timestamps:true});

 
module.exports= mongoose.model('user',userSchema);