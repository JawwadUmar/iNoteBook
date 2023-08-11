const express = require('express')
const router = express.Router();
const Note = require('../models/Note');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

//ROUTE 1: GET ALL THE NOTES using GET "/notes/fetchallnotes"
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({user: req.user.id});
    res.json(notes);

  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
  })

//ROUTE 2: ADDING A NEW NOTE using POST "/notes/addnote"  LOGIN REQUIRED
router.post('/addnote', fetchuser,  [
  body('title', 'Title length must be at least 3 characters').isLength({ min: 3 }),
  body('description', 'Description length must be at least 5 characters').isLength({min: 5})
  ], async (req, res) => {

  try {

  const {title, description, tag} = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const note = new Note({
    title, description, tag, user: req.user.id, 
  })
    const savedNote = await note.save();
    res.json(savedNote);
  }

  catch(error){
    console.error(error);
    res.status(500).send('Server Error');
  }
})

module.exports = router