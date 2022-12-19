import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './Nav';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Nav></Nav>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
