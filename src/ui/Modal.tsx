import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./Modal.css"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Modalbs = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Typography id="modal-title" variant="h6" component="h2">
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