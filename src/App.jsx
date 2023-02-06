import { Routes, Route } from 'react-router-dom';
import Peoples from './components/Peoples';
import './App.css';
import Starships from './components/Starships';

export default function App() {
  return (
    <div className='App'>
      <h1>SWAPI : Stars wars API</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Peoples</li>
          <li>Starships</li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={'HomePage'} />
        <Route path='/peoples' element={<Peoples />} />
        <Route path='/starships' element={<Starships />} />
      </Routes>
    </div>
  );
}
