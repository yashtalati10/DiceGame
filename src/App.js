import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Play from './components/Play';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/play' element={<Play />} />
      </Routes>
    </>
  );
}

export default App;
