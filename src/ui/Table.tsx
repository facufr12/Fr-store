import React from "react";
import "./Table.css";
import TableItem from "./TableItem";

const Table = ({ items, editItem }) => {
  console.log(items);
  return (
    <div className="tabla-container">
      <table className="tabla-ancha">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th style={{ textAlign: "center" }}>Modificar</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <TableItem item={item} key={i} editItem={editItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
