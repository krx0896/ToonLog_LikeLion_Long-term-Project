import React from 'react';
import './App.css';
import Editor from './pages/Editor'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Editor />} />
    </Routes>
  );
}

export default App;
