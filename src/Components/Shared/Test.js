import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";

const InscriptionPage = () => {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const formik = useFormik({
    initialValues: {
      id: "",
      token: uuidv4(),
      email: "",
      firstname: "",
      lastname: "",
      tel: "",
      password: "",
      confirm: "",
    },
    // validate,
    onSubmit: async (values) => {
      await registerUser(values);
      history.push("/ListUser");
    },
  });

  const registerUser = async (user) => {
    try {
      await axios.post("http://localhost:3001/users", user);
      await axios.post("/email", user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((result) => setUsers(result.data));
  }, []);

  return (
    <div className={"container mt-5"}>
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

        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default InscriptionPage;
