import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";

const ConnexionPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validate,

    onSubmit: async (values) => {
      let k = 0;
      for (let i = 0; i < users.length; i++) {
        if (
          values.email === users[i].email &&
          values.password === users[i].password
        ) {
          k = k + 1;
        }
      }
      if (k > 0) {
        console.log("supper");
      } else {
        console.log("erreur");
      }
    },
  });

  // const Login = (details) => {
  //   console.log(details);
  // };

  // const Logout = () => {
  //   console.log("logout");
  // };
  useEffect(() => {
    axios
      .get("http://localhost:3060/users")
      .then((result) => setUsers(result.data));
  }, []);

  return (
    <div className={"container mt-5"}>
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
            {formik.touched.email && formik.errors.email && formik.errors.email}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mot de passe</Form.Label>
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
        </Form.Group>

        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default ConnexionPage;
