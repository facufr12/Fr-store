import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css'; // Importa el archivo de estilos CSS

const validationSchema  = Yup.object().shape({
  producto: Yup.string().required('Product is required'),
  descripcion: Yup.string().required('Description is required'),
  imagen: Yup.string().required('Image is required'),
  stock: Yup.number().required('Stock is required').positive('Stock must be positive'),
  precio: Yup.number().required('price is required').positive('The price must be positive'),
});

const Formit = () => {
  return (
    <div className="form-container"> {/* Utiliza un div para el contenedor y aplica la clase "form-container" */}
      <h1>Create Product</h1>
      <Formik
        initialValues={{
          product: '',
          description: '',
          image: '',
          stock: 0,
          price: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="my-form"> {/* Utiliza un formulario y aplica la clase "my-form" */}
            <div>
              <label htmlFor="product">Product:</label>
              <Field className="field" type="text" name="producto" />
              <ErrorMessage className='errormessage' name="producto" component="div" />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <Field className="field" type="text" name="descripcion" />
              <ErrorMessage  className='errormessage' name="descripcion" component="div" />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <Field className="field" type="text" name="imagen" />
              <ErrorMessage  className='errormessage' name="imagen" component="div" />
            </div>
            <div>
              <label htmlFor="stock">Stock:</label>
              <Field className="field" type="number" name="stock" />
              <ErrorMessage  className='errormessage' name="stock" component="div" />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <Field className="field" type="number" name="precio" />
              <ErrorMessage  className='errormessage' name="precio" component="div" />
            </div>
            <button className='button' type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formit;
