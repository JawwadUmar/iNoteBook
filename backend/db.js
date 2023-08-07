const mongoose = require("mongoose");


const connectToMongo =() =>{
  mongoose.connect("mongodb://127.0.0.1:27017") 
  .then(()=> console.log("connection is successful"))
  .catch((err) => {console.log(err);});
}

module.exports = connectToMongo;

