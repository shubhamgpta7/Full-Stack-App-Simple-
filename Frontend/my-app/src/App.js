import logo from './logo.svg';
import './App.css';

//importing routing components
import {Home} from './Home';
import {Employee} from './Employee';
import {Department} from './Department';
import {BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">React-Js Front End  </h3>

      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item-m-1'>
            <NavLink className='btn btn-light btn-outline-primary m-2' to="/home"> 
              Home
            </NavLink>
            <NavLink className='btn btn-light btn-outline-primary m-2' to="/employee"> 
              Employee
            </NavLink>
            <NavLink className='btn btn-light btn-outline-primary m-2' to="/department"> 
              Department
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/department' element={<Department/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
