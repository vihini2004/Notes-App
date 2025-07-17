import React from 'react';

const NotesList = ({ notes, handleEdit, handleDelete }) => {
  console.log('Rendering Notes:', notes);  // Log the notes array to check if it's passed correctly

  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            {/* Edit button triggers the handleEdit function */}
            <button onClick={() => handleEdit(note._id)}>Edit</button>
            {/* Delete button triggers the handleDelete function */}
            <button onClick={() => handleDelete(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;


