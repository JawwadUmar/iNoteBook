const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); //for password hashing
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'jaeisagood$boy'; //we will sign our web token with this secret string...ideally it should be in an env file

//Create a User using POST ".api/auth/createUser". No login required
router.post('/createuser', [
  body('name').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // Check if the email already exists in the collection
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create and save the new user
    // const newUser = new User({ name, email, password });
    const newUser = new User({ name, email, password: secPass });

    // const newUser = await User.create({
    //   name: req.body.name,
    //   password: secPass,
    //   email: req.body.email,
    // })


    await newUser.save();

    const data = {
      user:{
        id: User.id
      }
    }
    //sign method jwt
    const authtoken = jwt.sign(data, JWT_SECRET);
    // console.log(authtoken);

    res.json({ message: 'User created successfully', authtoken });
  } catch (error) {

    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;