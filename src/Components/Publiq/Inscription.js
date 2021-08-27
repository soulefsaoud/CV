import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import validate from "./validation";

const InscriptionPage = ({ user }) => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [entreprise, setEntreprise] = useState("");

  const formik = useFormik({
    initialValues: {
      id: "",
      token: uuidv4(),
      email: "",
      firstname: "",
      lastname: "",
      tel: "",
      role: "user",
      password: "",
      confirm: "",
      entreprise: "",
      auth: false,
    },

    validate,
    onSubmit: async (values) => {
      console.log(entreprise);

      await registerUser({ ...values, entreprise: entreprise });
      history.push("/ValidationEmail");
      emailjs
        .send(
          "service_1jltkkf",
          "template_nud6fnp",
          values,
          "user_1w1n0wpwkgE46Lpbb7FBu"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  const registerUser = async (user) => {
    try {
      await axios.post("http://localhost:3060/users", user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3060/users")
      .then((result) => setUsers(result.data));
  }, []);

  return (
    <div className={"container mt-5"}>
      {user && user.isAuthenticated ? (
        <>
          {" "}
          <h1> Vous n'êtes pas identifié pour cette page</h1>
        </>
      ) : (
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              name={"firstname"}
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Form.Text className="text-danger">
              {formik.touched.firstname &&
                formik.errors.firstname &&
                formik.errors.firstname}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name={"lastname"}
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Form.Text className="text-danger">
              {formik.touched.lastname &&
                formik.errors.lastname &&
                formik.errors.lastname}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Numero de telephone</Form.Label>
            <Form.Control
              type="tel"
              name={"tel"}
              value={formik.values.tel}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Form.Text className="text-danger">
              {formik.touched.tel && formik.errors.tel && formik.errors.tel}
            </Form.Text>
          </Form.Group>

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

          <Form.Group className="mb-3">
            <Form.Label>Confirmez le mot de passe</Form.Label>
            <Form.Control
              type="password"
              name={"confirm"}
              value={formik.values.confirm}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Form.Text className="text-danger">
              {formik.touched.confirm &&
                formik.errors.confirm &&
                formik.errors.confirm}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <select
              name={"entreprise"}
              onChange={(e) => setEntreprise(e.target.value)}
              onBlur={formik.handleBlur}
            >
              <option label="Entreprise" />
              <option value="oui" label="Oui" />
              <option value="non" label="Non" />
            </select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      )}
    </div>
  );
};

export default InscriptionPage;
