
// src/components/EditNoteForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditNoteForm = ({ noteId, onNoteUpdated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Fetch the note to be edited when the component mounts
  useEffect(() => {
    axios.get(`http://localhost:5000/api/notes/${noteId}`)
      .then((response) => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch((error) => {
        console.error('Error fetching note details!', error);
      });
  }, [noteId]);

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedNote = { title, content };

    // Send the updated note to the backend
    axios.put(`http://localhost:5000/api/notes/${noteId}`, updatedNote)
      .then((response) => {
        onNoteUpdated(response.data);  // Pass the updated note to the parent
      })
      .catch((error) => {
        console.error('There was an error updating the note!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Note</h3>
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
