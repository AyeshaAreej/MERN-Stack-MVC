const express=require('express');
const router=express.Router();
// const User=require('../models/users');
// const multer=require('multer');

// //image upload
// var storage=multer.diskStorage({
//     destination: function(req,file, cb){
//         cb(null,'./uploads');
//     },
//     filename: function(req, file,cb){
//      cb(null, file.fieldname+"_"+Date.now()+"_"+ file.originalname);  
//     },
// });

// var upload =multer ({
//     storage:storage,
// }).single('image');

// //insert an user into database
// router.post('/add', upload,(req, res)=>{
// const user=new User({
//     name:req.body.name,
//     email:req.body.email,
//     phone:req.body.phone,
//     image:req.file.filename,
    
// });
// user.save((err)=>{
//     if(err){
//         res.json({message:err.message, type:'danger'})
//     }
//     else{
//        console.log('user added')
//     };
//     res.redirect('/');
// })
// })

router.get("/users", (req,res)=>{
    res.send("All Users")
})

module.express=router;

