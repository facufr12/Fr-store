import React, { useState, useEffect } from "react";
import "./Tienda.css";
import Table from "../ui/Table";
import { axiosInstance } from "../services/axios.config";

const Tienda = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/")
      .then((response) => {
        setItems(response.data); // Actualiza el estado con los datos de la respuesta
      })
      .catch((error) => {
        setError("Error al cargar los productos."); // Maneja el error de manera más informativa
      });
  }, []);

const editItem = () => {
  console.log ("editando producto")
  //hacer un put
}

return (
    <div className="tienda">
  
      {error ? (
        <p>{error}</p>
      ) : items.length > 0 ? (
        <Table items={items} editItem={editItem} />
      ) : (
        <p>No hay productos en el sistema</p>
      )}
    </div>
  );
};

export default Tienda;
