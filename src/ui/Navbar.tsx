import React from 'react';
import './Navbar.css'; // Importa tus estilos CSS si los tienes
import Home from "../components/Tienda"
import CreateProductus from '../components/CreateProductus';
import Formit from './Form';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbarcontainer'>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
            Tienda
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/formit" className="nav-link">
            Formulario
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/createproducts" className="nav-link">
           Createproducts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;