const mongoose=require('mongoose');

const db=async()=>{
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to the database")
    }
    catch(err){
        console.log("db err");
    }
}
module.export={db}