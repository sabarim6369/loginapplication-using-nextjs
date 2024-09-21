// require("dotenv").config();
// const mongoose=require("mongoose");
// const mongodbconnection=mongoose.connect(process.env.mongodb_uri)
// .then(con=>{
//     console.log("connection successful with mongodb");
// })
// .catch(err=>{
//     console.log("error occurred😒😒😒😒😒😒",err)
// })
// module.exports=mongodbconnection


require("dotenv").config();
const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.log("Error occurred during MongoDB connection: 😒", error);
    throw new Error('Could not connect to MongoDB');
  }
};

module.exports = connectMongoDB;

