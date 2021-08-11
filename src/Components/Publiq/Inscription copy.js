import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { Button, Form } from "react-bootstrap";
import validate from "./validation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
const InscriptionPage = () => {
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
    validate,
    onSubmit: async (values) => {
      registerUser(values);
      history.push("/ListUser");
    },
  });
  //   var templateParams = {
  //     name: "James",
  //     notes: "Check this out!",
  //   };

  //   const sendEmail = (user) => {
  //     emailjs
  //       .send("service_geg1l24", "template_g6k4xsn", "user_1w1n0wpwkgE46Lpbb7FBu")
  //       .then(
  //         function (response) {
  //           console.log("SUCCESS!", response.status, response.text);
  //         },
  //         function (err) {
  //           console.log("FAILED...", err);
  //         }
  //       );
  //   };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_geg1l24",
        "template_nud6fnp",
        e.target,
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
    e.target.reset();
  };

  const registerUser = async (user) => {
    try {
      await axios.post("http://localhost:3060/users", user);
      sendEmail();
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
