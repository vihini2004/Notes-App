import React, { useState } from 'react';
import NotesList from '../components/NotesList';
import NoteForm from '../components/NoteForm';
import './App.css';  // Import the updated CSS file for styling

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);  // Track the note being edited

  // Function to handle adding a new note
  const handleNoteAdded = (newNote) => {
    console.log('New Note Added:', newNote);
    setNotes([...notes, newNote]);  // Add the new note to the existing notes list
  };

  // Function to handle editing a note
  const handleEdit = (id) => {
    const noteToEdit = notes.find(note => note._id === id);
    setEditingNote(noteToEdit);  // Set the note to be edited in the form
    console.log("Editing Note ID:", id);
  };

  // Function to handle updating a note after editing
  const handleUpdateNote = (updatedNote) => {
    setNotes(notes.map(note => (note._id === updatedNote._id ? updatedNote : note)));
    setEditingNote(null);  // Clear the editing state after saving
  };

  // Function to handle deleting a note
  const handleDelete = (id) => {
    setNotes(notes.filter(note => note._id !== id));  // Remove the note from the state
    console.log("Deleted Note ID:", id);
  };

  return (
    <div className="container">
      <h1>My Notes App</h1>
      
      {/* Pass the editingNote prop to NoteForm for editing functionality */}
      <NoteForm 
        onNoteAdded={handleNoteAdded} 
        editingNote={editingNote} 
        onUpdateNote={handleUpdateNote} 
      />
      
      {/* Render the NotesList component, passing the notes, handleEdit, and handleDelete */}
      <NotesList 
        notes={notes} 
        handleEdit={handleEdit} 
        handleDelete={handleDelete} 
      />
      
      {/* Add more floating bubbles */}
      <div className="bubble" style={{ top: '10%', left: '20%' }}></div>
      <div className="bubble" style={{ top: '30%', left: '60%' }}></div>
      <div className="bubble" style={{ top: '50%', left: '10%' }}></div>
      <div className="bubble" style={{ top: '70%', left: '40%' }}></div>
      <div className="bubble" style={{ top: '20%', left: '80%' }}></div>
      <div className="bubble" style={{ top: '80%', left: '50%' }}></div>
      <div className="bubble" style={{ top: '40%', left: '70%' }}></div>
      <div className="bubble" style={{ top: '60%', left: '30%' }}></div>
    </div>
  );
};

export default App;





