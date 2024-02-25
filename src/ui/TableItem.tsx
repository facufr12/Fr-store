import React from "react";
import "./TableItem.css";
import Modalbs from "./Modal"
const TableItem = ({ item, editItem }) => {
  const { product, price, stock, id } = item;

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
          onClick={}
        ></i>
        <i style={{ cursor: "pointer" }} className="bi bi-trash"></i>{" "}
      </td>
    </tr>
  );
};

export default TableItem;
