// const express = require('express');
// const router = express.Router();

// // Using user
// const User = require('../models/User');

// // Express validator
// const { body, validationResult } = require('express-validator');

// // Create a user using POST and an endpoint ("/api/auth/")
// // Doesn't require AUTH

// router.post('/', [
//   body('name', 'Enter a valid Name').isLength({ min: 3 }),
//   body('email', 'Enter a valid Email').isEmail(),
//   body('password', 'Password must be at least 5 characters ').isLength({ min: 5 })
// ], (req, res) => {
//   const errors = validationResult(req);
  
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   // res.send({ message: 'User created successfully' });

//   User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   }).then(user => res.json(user));
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/', [
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

    // Create and save the new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.send({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
