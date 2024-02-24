import React from "react";
import Form from "./ui/Form";
import "./App.css";
import Titulo from "./ui/Titulo";
import Navbar from "./ui/Navbar";
import Formit from "./ui/Form"
import Tienda from "./components/Tienda"
import CreateProductus from "./components/CreateProductus";
import Marquesina from "./ui/Marquesina"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
 <div className="container">
 <Router>
  <Marquesina />
  <Titulo />
        <Navbar />
        <Routes>
          <Route path="/" element={<Tienda />}></Route>
          <Route path="/formit" element={<Formit />}></Route>
          <Route path="/createproducts" element={<CreateProductus />}></Route>
       
       
        </Routes>
      </Router>
 </div>
  );
}
