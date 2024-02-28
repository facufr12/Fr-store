import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./Modal.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const initialCredentials = {
  product: "",
  description: "",
  image: "",
  stock: 0,
  price: 0,
};

const Modalbs = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validationSchema = Yup.object().shape({
    product: Yup.string().required("Product is required"),
    description: Yup.string().required("Description is required"),
    image: Yup.string().required("Image is required"),
    stock: Yup.number()
      .required("Stock is required")
      .positive("Stock must be positive"),
    price: Yup.number()
      .required("price is required")
      .positive("The price must be positive"),
  });




  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Editar Componente
      </Button>
      <Modal className="container"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <Box sx={{ bgcolor: "background.paper", boxShadow: 24, p: 4, minWidth: 300 }}>
            <Typography id="modal-title" variant="h6" component="h2" >
              Editar Componente
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Contenido de edición...
            </Typography>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={handleClose} color="secondary" variant="contained">
                Cerrar
              </Button>
              <Button onClick={handleClose} variant="contained" sx={{ ml: 2 }}>
                Guardar Cambios
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Modalbs;