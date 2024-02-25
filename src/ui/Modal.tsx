import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Modalbs = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    // Aquí colocarías tu lógica para editar el componente
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Editar Componente
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Componente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Aquí colocarías el contenido del modal de edición */}
            {/* Por ejemplo: */}
            <p>Contenido de edición...</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default Modalbs;