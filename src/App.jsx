import { Routes, Route, NavLink } from 'react-router-dom';
import Peoples from './components/Peoples';
import './App.css';
import Starships from './components/Starships';

export default function App() {
  return (
    <div className='App'>
      <h1>SWAPI : Star wars API</h1>
      <nav>
        <ul>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/peoples'>
            <li>Peoples</li>
          </NavLink>
          <NavLink to='/starships'>
            <li>Starships</li>
          </NavLink>
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
