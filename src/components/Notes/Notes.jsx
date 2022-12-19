import React, { useRef } from 'react';
import useLocalStorage from '../../hooks/useLocalstorage';
import Note from './Note';
import './notes.css';

export default function Notes() {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const textareaRef = useRef(null);

  const addNote = () => {
    if (!textareaRef.current.value.trim()) return;
    setNotes((items) => {
      return [{ text: textareaRef.current.value, id: Date.now(), isEditing: false }, ...items];
    });
    textareaRef.current.value = '';
  };

  const deleteNote = (note) => {
    setNotes((items) => {
      return items.filter((item) => item.id !== note.id);
    });
  };

  const editNote = (note) => {
    const index = notes.findIndex((item) => item.id === note.id);
    const clonedNotes = [...notes];
    clonedNotes.splice(index, 1, { ...note, isEditing: true });
    setNotes(clonedNotes);
  };

  const updateNote = (note) => {
    const index = notes.findIndex((item) => item.id === note.id);
    const clonedNotes = [...notes];
    clonedNotes.splice(index, 1, { ...note, isEditing: false });
    setNotes(clonedNotes);
  };

  return (
    <div className='notes-container'>
      <h3>Create Notes</h3>

      <div className='form-group'>
        <label>Create Note</label>
        <textarea type='text' placeholder='Add Note' ref={textareaRef}></textarea>
        <button onClick={addNote}>Add</button>
      </div>

      <hr />
      <div className='view-notes'>
        <h3>View Notes</h3>
        {notes.length === 0 ? (
          <p>Sorry!! No notes to show...</p>
        ) : (
          <div className='note-list'>
            {notes.map((note, idx) => {
              return (
                <Note
                  item={note}
                  idx={idx}
                  key={note.id}
                  editNote={editNote}
                  updateNote={updateNote}
                  deleteNote={deleteNote}
                ></Note>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
