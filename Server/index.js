// server/index.js or your main Express file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Note = require('./models/Note');  // Import the Note model
require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());  // Middleware to parse incoming JSON requests

// MongoDB connection setup
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');  // Log a success message when connected
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);  // Log any connection errors
  });

// POST route for adding a new note
app.post('/api/notes', async (req, res) => {
  try {
    const { title, content } = req.body;

    // Ensure title and content are provided
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    // Create a new note
    const newNote = new Note({
      title,
      content,
    });

    // Save the note to the database
    const savedNote = await newNote.save();

    // Return the saved note in the response (make sure to send JSON)
    res.status(201).json(savedNote);  // JSON response
  } catch (err) {
    console.error('Error saving note:', err);
    res.status(500).json({ message: 'Error saving note', error: err });
  }
});

// PUT route to update a note by its ID
app.put('/api/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    // Find the note by ID and update it
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }  // Return the updated note
    );

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json(updatedNote);  // Send the updated note as the response
  } catch (err) {
    console.error('Error updating note:', err);
    res.status(500).json({ message: 'Error updating note', error: err });
  }
});


// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});



