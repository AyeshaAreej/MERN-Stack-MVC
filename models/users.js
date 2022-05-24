//defining schema
const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
  image:{
    type:String,
    required:true,
},
  name:{
      type:String,
      required:true,
  },
  email:{
    type:String,
    required:true,
},
phone:{
    type:String,
    required:true,
},
city:{
  type:String,
 
},
postcode:{
  type:String,
 
},
country:{
  type:String,
 
},




});

module.exports=mongoose.model("User", userSchema);