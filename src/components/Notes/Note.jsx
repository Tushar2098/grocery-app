import React, { useState } from 'react';

export default function Note({ item, editNote, deleteNote, idx, updateNote }) {
  const [noteText, setNoteText] = useState(item.text);

  const handleInputChange = ({ target }) => {
    setNoteText(target.value);
  };

  return (
    <div key={item.id} className='note'>
      <span>#{idx}</span>
      {item.isEditing ? (
        <input type='text' value={noteText} onChange={handleInputChange} />
      ) : (
        <span>{item.text}</span>
      )}
      <div className='action'>
        {item.isEditing ? (
          <button onClick={() => updateNote({ ...item, text: noteText })}>Save</button>
        ) : (
          <button onClick={() => editNote(item)}>Edit</button>
        )}
        <button onClick={() => deleteNote(item)}>Delete</button>
      </div>
    </div>
  );
}
