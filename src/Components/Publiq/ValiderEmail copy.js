import React from "react";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import validate from "./validateMailAdress";
import axios from "axios";

const ValidationEmailPage = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  const formik = useFormik({
    initialValues: {
      email: "",
      token: "",
      auth: true,
    },
    validate,
    onSubmit: async (values) => {
      console.log(formik.values.au);
      let k = 0;

      for (let i = 0; i < users.length; i++) {
        if (
          values.email === users[i].email &&
          values.token === users[i].token
        ) {
          k = k + 1;
          users[i].auth = true;
          axios
            .put(`http://localhost:3001/users/${users[i].id}`)
            .then((users) => {
              console.log(users);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
      if (k === 1) {
        console.log("supper");

        history.push("/");
      } else {
        console.log("erreur");
      }
    },
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((result) => setUsers(result.data));
  }, []);

  return (
    <div className={"container mt-5"}>
      <Form onSubmit={formik.handleSubmit}>
        <h4>Valider Votre adresse E-mail</h4>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name={"email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Form.Text className="text-danger">
            {formik.touched.email && formik.errors.email && formik.errors.email}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Entrer le Token qui vous a été envoyé par mail{" "}
          </Form.Label>
          <Form.Control
            type="text"
            name={"token"}
            value={formik.values.token}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Form.Text className="text-danger">
            {formik.touched.token && formik.errors.token && formik.errors.token}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default ValidationEmailPage;
