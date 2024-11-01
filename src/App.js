import './App.css';
import HomePage from './components/HomePage';
import Play from './components/Play';
import { HashRouter as Router, Routes, Route, Switch } from 'react-router-dom';


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
