import {useFormik} from "formik";
import {v4 as uuidv4} from "uuid";
import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import validate from '../validations/newUser_valid'
import InfoPerso from "./InfoPerso";
import {Link} from "react-router-dom";

const Inscription = ({user}) => {
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const [entreprise, setEntreprise] = useState(false);

    const formik = useFormik({
        initialValues: {
            id: uuidv4(),
            email: "",
            first_name: "",
            last_name: "",
            telephone: "",
            role: !entreprise ? "auditeur" : "entreprise",
            password: "",
            confirm: "",
            entreprise: "",
        },

        validate,
        onSubmit: async (values) => {
            await registerUser({...values});
        },
    });

    const registerUser = async (user) => {
        try {
            await axios.post("http://localhost:3001/users", user);
            await axios.patch("http://localhost:3001/logged", user)
            history.push(`/ProfilDetailsPage/${user.id}`)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form className={"mt-5 w-50 mx-auto"} onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Prénom</Form.Label>
                <Form.Control

                    type="text"
                    name={"first_name"}
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                />
                <Form.Text className="text-danger">
                    {formik.touched.first_name &&
                    formik.errors.first_name &&
                    formik.errors.first_name}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                    type="text"
                    name={"last_name"}
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <Form.Text className="text-danger">
                    {formik.touched.last_name &&
                    formik.errors.last_name &&
                    formik.errors.last_name}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Numero de telephone</Form.Label>
                <Form.Control
                    type="tel"
                    name={"telephone"}
                    value={formik.values.telephone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <Form.Text className="text-danger">
                    {formik.touched.telephone && formik.errors.telephone && formik.errors.telephone}
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


            <button type={"button"} onClick={
                () => {
                    setEntreprise(!entreprise)
                    formik.values.role = entreprise ? "auditeur" : "entreprise"
                }
            } className="mb-3 btn btn-link">
                {!entreprise ? "Entreprise ?" : "Auditeur ?"}
            </button>

            {!entreprise ? <div></div> : (
                <Form.Group className="mb-3">
                    <Form.Label>Nom de votre entreprise</Form.Label>
                    <Form.Control
                        type="text"
                        name={"entreprise"}
                        value={formik.values.entreprise}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Group>
            ) }


            <Button variant="primary" type="submit">
                Envoyer
            </Button>
        </Form>
    );
};

export default Inscription;
