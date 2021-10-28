import React from "react";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ValiderPassPage = ({ user }) => {
  const history = useHistory();

  const [users, setUsers] = useState([]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    // validate,
    onSubmit: async (values) => {
      let check = false;
      for (let i = 0; i < users.length; i++) {
        if (values.email === users[i].email) {
          users[i].password = values.password;
          users[i].confirm = values.password;
          check = true;
          return axios
            .put(`http://localhost:3001/users/${users[i].id}`, users[i])
            .then((users) => {
              console.log(users);
              history.push("/Connexion");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
      if (check === false) {
        alert("il n'y a pas un utilisateur avec cette adresse mail");
      }
    },
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((result) => setUsers(result.data));
  }, []);

  return (
    <div className=" container divValidation">
      {user && user.isAuthenticated ? (
        <>
          <h1 className="text-center">
            {" "}
            Vous n'êtes pas identifié pour cette page
          </h1>
        </>
      ) : (
        <>
          <div className="text-center mb-3">
            <h3>Mot de passe oublié</h3>
          </div>
          <div className="divForm">
            <Form onSubmit={formik.handleSubmit}>
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
              {/* <Form.Group className="mb-3">
                <Form.Label>Nouveau mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  name={"password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Form.Text className="text-danger">
                  {formik.touched.password &&
                    formik.errors.password &&
                    formik.errors.password}
                </Form.Text>
              </Form.Group> */}

              <Button variant="success" type="submit">
                Valider
              </Button>
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

export default ValiderPassPage;
