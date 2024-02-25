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
            <Link to="/tienda" className="nav-link">
            Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/formit" className="nav-link">
            CreateProduct
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/createproducts" className="nav-link">
           DeleteProducts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;