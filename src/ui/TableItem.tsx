import React, { useState } from "react"; // Corregir la importación de useState
import "./TableItem.css";
import Modalbs from "./Modal";

const TableItem = ({ item, editItem }) => {
  const { product, price, stock, id } = item;

  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  // Función para mostrar el modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <tr>
      <th>{id}</th>
      <td>{product}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td style={{ display: "flex", justifyContent: "space-evenly" }}>
        <i
          style={{ cursor: "pointer" }}
          className="bi bi-pencil-square"
          onClick={handleShowModal}
        ></i>
        <i style={{ cursor: "pointer" }} className="bi bi-trash"></i>{" "}
      </td>
      {/* Renderiza el modal cuando showModal es true */}
      {showModal && <Modalbs />}
    </tr>
  );
};

export default TableItem;