import React from "react";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import validate from "./validateMailAdress";
import axios from "axios";

const ValidationEmailPage = ({ user }) => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  const formik = useFormik({
    initialValues: {
      email: "",
      token: "",
    },
    validate,
    onSubmit: async (values) => {
      let k = 0;

      for (let i = 0; i < users.length; i++) {
        if (
          values.email === users[i].email &&
          values.token === users[i].token
        ) {
          k = k + 1;
          users[i].auth = true;
          console.log(users);
          axios.put(`http://localhost:3060/users/${users[i].id}`, users[i]);
        }
      }
      if (k === 1) {
        console.log("supper");

        history.push("/");
      } else {
        alert("token ou email invalide");
        console.log("erreur");
      }
    },
  });

  useEffect(() => {
    axios
      .get("http://localhost:3060/users")
      .then((result) => setUsers(result.data));
  }, []);

  return (
    <div className={"container mt-5"}>
      {user && !user.isAuthenticated ? (
        <>
          {" "}
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
                {formik.touched.email &&
                  formik.errors.email &&
                  formik.errors.email}
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
                {formik.touched.token &&
                  formik.errors.token &&
                  formik.errors.token}
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </>
      ) : (
        <h1 className="text-center">
          Vous n'êtes pas identifié pour cette page
        </h1>
      )}
    </div>
  );
};

export default ValidationEmailPage;
