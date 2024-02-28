import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  IconButton,
  Modal,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TableItem = ({ item, editItem }) => {
  const { product, price, stock, id } = item;

  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const [editedProduct, setEditedProduct] = useState({ id, product, price, stock }); // Estado para almacenar los datos editados

  // Función para mostrar el modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Función para manejar cambios en los campos editables
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Función para guardar los cambios
  const handleSaveChanges = () => {
    // Aquí puedes enviar los datos editados a través de alguna función, por ejemplo, editItem(editedProduct)
    // Y luego cerrar el modal
    handleCloseModal();
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
          <Typography variant="h6" color="black" component="h2" gutterBottom>
            Editar Producto
          </Typography>
          <TextField
            name="id"
            label="ID"
            value={editedProduct.id}
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="product"
            label="Nombre"
            value={editedProduct.product}
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="price"
            label="Precio"
            value={editedProduct.price}
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="stock"
            label="Stock"
            value={editedProduct.stock}
            onChange={handleFieldChange}
            fullWidth
            margin="normal"
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              className="buton"
              onClick={handleCloseModal}
              color="secondary"
              variant="contained"
              sx={{ mr: 1 }}
            >
              Cerrar
            </Button>
            <Button
              className="buton"
              onClick={handleSaveChanges}
              color="primary"
              variant="contained"
            >
              Guardar
            </Button>
          </Box>
        </Box>
      </Modal>
    </TableRow>
  );
};

export default TableItem;
