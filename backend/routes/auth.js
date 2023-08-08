const express = require('express')
const router = express.Router();

//using user
const User = require('../models/User');

//Create a user using : POST and an endpoint ("/api/auth/")
//Doesn't require AUTH


router.post('/', (req, res) => {

  //request ke body me jo bhja gya hai usko dekhne ke liye: 
  console.log(req.body);

  //creating a new user
  
  const user = User(req.body);
  user.save()

  
  //response
  // res.send("this the response that is sent for the request made by client")
  res.send(req.body);
    // res.json([])
  })

  module.exports = router