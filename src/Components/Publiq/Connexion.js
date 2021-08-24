import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import Auth from "../Contexts/Auth";

import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import ReseauSociauxPage from "../Users/ReseauxSociaux";
import GoogleBtn from "./GoogleBtn";
import FacebookBtn from "./FacebookBtn";
import TwitterBtn from "./TwitterBtn";
import GithubBtn from "./GithubBtn";

const ConnexionPagee = () => {
  const history = useHistory();
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  const [users, setUsers] = useState([]);

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
          values.password === users[i].password &&
          users[i].auth === true
        ) {
          k = k + 1;
        }
      }
      if (k > 0) {
        const response = await axios.get("http://localhost:3060/users");
        setIsAuthenticated(response);
        history.replace("/");
        alert("suppper");
      } else {
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
    <div className={"container mt-5 main"}>
      <Form onSubmit={formik.handleSubmit}>
        {/* <fieldset> */}
        {/* <legend>Se connecter</legend> */}

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
        {/* </fieldset> */}
        <Link to="/ValidationPass">Mot de passe oublié?</Link>
      </Form>

      <div className="reseauSociauxCnx">
        <ReseauSociauxPage />
      </div>
    </div>
  );
};

export default ConnexionPagee;
