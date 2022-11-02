import './App.css';
import Editor from './pages/editor'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Editor />} />
    </Routes>
  );
}

export default App;

