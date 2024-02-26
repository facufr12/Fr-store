import React, { useState } from "react";
import { TableRow, TableCell, IconButton, Modal, Box, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TableItem.css"

const TableItem = ({ item, editItem }) => {
  const { product, price, stock, id } = item;

  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  // Función para mostrar el modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{product}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{stock}</TableCell>
      <TableCell style={{ display: "flex", justifyContent: "space-evenly" }}>
      <IconButton onClick={handleShowModal} color="primary" sx={{ mr: 1 }}>
        <EditIcon />
      </IconButton>
      <IconButton color="error">
        <DeleteIcon />
      </IconButton>
      </TableCell>
      {/* Renderiza el modal cuando showModal es true */}
      <Modal open={showModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            minWidth: 300,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Editar Producto
          </Typography>
          <Typography variant="body1" gutterBottom>
            ID: {id}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Nombre: {product}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Precio: {price}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Stock: {stock}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
      <Button className="buton" onClick={handleCloseModal} color="secondary" variant="contained" sx={{ mr: 1 }}>
        Cerrar
      </Button>
      <Button className="buton" onClick={handleCloseModal} color="primary" variant="contained">
        Guardar
      </Button>
    </Box>
        </Box>
      </Modal>
    </TableRow>
  );
};

export default TableItem;