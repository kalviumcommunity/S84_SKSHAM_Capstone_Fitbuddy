
const mongoose =require('mongoose')
const db=process.env.DB_URL;

mongoose.connect(db).then(()=>{
console.log('☠️☠️☠️☠️☠️');
}).catch((error)=>{
    console.log(error);
})

module.exports=mongoose;