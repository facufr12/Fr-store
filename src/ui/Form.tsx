import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Form.css"; // Importa el archivo de estilos CSS
import { axiosInstance } from "../services/axios.config.js";




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
const initialCredentials = {
  product: "",
  description: "",
  image: "",
  stock: 0,
  price: 0,
};

const Formit = () => {
  return (
    <div className="form-container">
      {" "}
      {/* Utiliza un div para el contenedor y aplica la clase "form-container" */}
      <h1>Create Product</h1>
      <Formik
        initialCredentials={{
          product: "",
          description: "",
          image: "",
          stock: 0,
          price: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          axiosInstance
            .post("/", values)
            .then((r) => console.log(r))
            .catch((err) => console.log(err));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="my-form">
            {" "}
            {/* Utiliza un formulario y aplica la clase "my-form" */}
            <div>
              <label htmlFor="product">Product:</label>
              <Field className="field" type="text" name="product" />
              <ErrorMessage
                className="errormessage"
                name="producto"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <Field className="field" type="text" name="description" />
              <ErrorMessage
                className="errormessage"
                name="descripcion"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <Field className="field" type="text" name="image" />
              <ErrorMessage
                className="errormessage"
                name="imagen"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="stock">Stock:</label>
              <Field className="field" type="number" name="stock" />
              <ErrorMessage
                className="errormessage"
                name="stock"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <Field className="field" type="number" name="price" />
              <ErrorMessage
                className="errormessage"
                name="precio"
                component="div"
              />
            </div>
            <button className="button" type="submit" disabled={isSubmitting}>
              Send product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formit;
