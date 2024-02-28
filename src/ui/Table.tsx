import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./Table.css";
import TableItem from "./TableItem";
import { useState } from "react";

const Tablebs = ({ items, editItem }) => {
  console.log(items);
  return (
    <TableContainer className="tabla-container">
      <Table className="tabla-ancha">
        <TableHead>
          <TableRow>
            <TableCell align="center">#ID</TableCell>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="center">Custom</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item, i, updatedData) => (
            <TableItem item={item} key={i} editItem={editItem} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tablebs;