import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import Auth from "../Contexts/Auth";
import { v4 as uuidv4 } from "uuid";

import axios from "axios";
import { Link } from "react-router-dom";
import ReseauSociauxPage from "../Users/ReseauxSociaux";

import { login } from "../Services/AuthApi";

const ConnexionPagee = ({ history }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let k = 0;
    for (let i = 0; i < users.length; i++) {
      if (
        user.email === users[i].email &&
        user.password === users[i].password &&
        users[i].auth === true
      ) {
        k = k + 1;
      }
    }
    if (k > 0) {
      const response = await login();
      setIsAuthenticated(response);
      console.log(response);
      history.replace("/");
      alert("suppper");
      // localStorage.setItem(user.email, uuidv4());
    } else {
      console.log("erreur");
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:3060/users")
      .then((result) => setUsers(result.data));
    if (isAuthenticated) {
      history.replace("/");
    }
  }, [history, isAuthenticated]);

  return (
    <div className={"container mt-5 main"}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name={"email"} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            name={"password"}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Envoyer
        </Button>
        <Link to="/ValidationPass">Mot de passe oublié?</Link>
      </Form>

      <div className="reseauSociauxCnx">{/* <ReseauSociauxPage /> */}</div>
    </div>
  );
};

export default ConnexionPagee;
