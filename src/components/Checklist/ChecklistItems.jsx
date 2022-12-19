import React from 'react';

export default function ChecklistItems({ checklists, toggleComplete, placeholderMessage }) {
  return (
    <React.Fragment>
      {checklists.length === 0 ? (
        <p>{placeholderMessage}</p>
      ) : (
        <ul className='checklist-items'>
          {checklists.map((checklist) => {
            return (
              <li key={checklist.id}>
                <input
                  type='checkbox'
                  checked={checklist.completed}
                  id={'checkbox_' + checklist.id}
                  onChange={() => toggleComplete(checklist)}
                />
                <label htmlFor={'checkbox_' + checklist.id}>{checklist.name}</label>
              </li>
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
}
