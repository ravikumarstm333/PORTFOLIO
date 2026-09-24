import mongoose from "mongoose";
const database = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("database connected successfully ");
    }
    catch(error){
        console.log("databse connection faield:", error);
    }
}
export default database;