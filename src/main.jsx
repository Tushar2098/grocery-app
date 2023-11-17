import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Checklist from './components/Checklist';
import Notes from './components/Notes/Notes';
import Reminder from './components/Reminder/Reminder';

// 23:06 F1 Changes - with HF-1
// 23:06 F2 Changes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/checklist', element: <Checklist /> },
      { path: '/notes', element: <Notes /> },
      { path: '/reminder', element: <Reminder /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
