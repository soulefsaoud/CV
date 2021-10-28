import { Button, Form } from "react-bootstrap";
import { useState } from "react";

import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import ReseauSociauxPage from "../Users/ReseauxSociaux";
//import validate from "./validation";

const ConnexionPagee = ({ setLoggedUser }) => {
  const history = useHistory();
  const [error, setError] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
    auth: true,
  });
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/login", {
        email: user.email,
        password: user.password,
      });
      console.log(data);
      setLoggedUser({
        token: "Bearer " + data.token,
        isAuthenticated: true,
      });
      history.push("/");
    } catch (err) {
      setLoggedUser(null);
      console.error(err.message);
    }
  };

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
     
        <Form.Group className="position-relative mb-3">
        <div class="col">

            <Form.Check
              required
              name="terms"
              label="Se souvenir de moi"
              onChange={handleChange}
              isInvalid={!!error.terms}
              feedback={error.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
             />

           <div className="mb-3">
             <div className="MotDepasseOublie">
            <div className=""><Link to="/ValidationPass">Mot de passe oublié?</Link></div>
            </div>
            </div>
       
       </div>
          </Form.Group>
          
          
          


        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      
        <div className=""><Link to="/Home">envoyer</Link></div>

      </Form>
      {error && <p className={"text-danger"}>{error}</p>}

      <div className="reseauSociauxCnx">
        <ReseauSociauxPage />
      </div>

      
    </div>
  );
};

export default ConnexionPagee;
