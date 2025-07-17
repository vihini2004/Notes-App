import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoteForm = ({ onNoteAdded, editingNote, onUpdateNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Populate the form fields if editing an existing note
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

  // Handle form submission for both adding and updating a note
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the form from refreshing the page

    const newNote = { title, content };

    console.log('Form submitted:', newNote);

    if (editingNote) {
      // If editing, send a PUT request to update the note
      console.log(`Updating note with ID: ${editingNote._id}`);
      axios.put(`http://localhost:5000/api/notes/${editingNote._id}`, newNote)
        .then((response) => {
          console.log('Updated note response:', response.data);
          onUpdateNote(response.data);  // Pass the updated note to the parent component (App.jsx)
          setTitle('');  // Clear the form
          setContent('');
        })
        .catch((error) => {
          console.error('Error updating note:', error);
        });
    } else {
      // If adding a new note, send a POST request
      axios.post('http://localhost:5000/api/notes', newNote)
        .then((response) => {
          onNoteAdded(response.data);  // Add the note to the parent component (App.jsx)
          setTitle('');  // Clear the form
          setContent('');
        })
        .catch((error) => {
          console.error('Error adding note:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editingNote ? 'Edit Note' : 'Add a New Note'}</h3>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">{editingNote ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
};

export default NoteForm;







