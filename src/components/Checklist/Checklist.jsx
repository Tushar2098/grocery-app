import React, { useMemo, useRef } from 'react';
import useLocalStorage from '../../hooks/useLocalstorage';
import './checklist.css';
import ChecklistItems from './ChecklistItems';

export default function Checklist() {
  const [checklists, setChecklists] = useLocalStorage('checklist', []);
  const inputRef = useRef();
  const addChecklist = () => {
    if (!inputRef.current.value.trim()) return;
    setChecklists((items) => {
      return [{ name: inputRef.current.value, completed: false, id: Date.now() }, ...items];
    });
    inputRef.current.value = '';
  };
  const toggleComplete = (checklist) => {
    const index = checklists.findIndex((item) => item.id === checklist.id);
    const cloned = [...checklists];
    cloned.splice(index, 1, { ...checklist, completed: !checklist.completed });
    setChecklists(cloned);
  };

  const completedItems = useMemo(() => checklists.filter((checklist) => checklist.completed));
  const pendingItems = useMemo(() => checklists.filter((checklist) => !checklist.completed));

  return (
    <div className='checklist-container'>
      <div className='form-group'>
        <input type='text' placeholder='Add Item' ref={inputRef} />
        <button onClick={addChecklist}>Add</button>
      </div>

      <div className='view-checklist'>
        <h3>Checklist Items</h3>
        <ChecklistItems
          checklists={pendingItems}
          toggleComplete={toggleComplete}
          placeholderMessage={'Great!!, all done...'}
        ></ChecklistItems>
      </div>
      <hr />
      <div className='completed-checklists'>
        <h3>Completed Checklist</h3>
        <ChecklistItems
          checklists={completedItems}
          toggleComplete={toggleComplete}
          placeholderMessage={'Ohh..noo!!, nothing is done...'}
        ></ChecklistItems>
      </div>
    </div>
  );
}
