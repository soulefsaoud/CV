import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import {Button, Form, InputGroup} from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import validate from "../../validations/newEntreprise_valid"

const AddFormationForm = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            id: uuidv4(),
            first_name: "",
            niveau_etudes:"",
            etablissement:"",
            lieu:"",
           },

        validate,
        onSubmit: async (values) => {

            await registerUser({ ...values});
            history.push(`/ListUser`);
            emailjs
                .send(
                    "service_ffghfghfghfgm",
                    "template_gfhfghfghgfh3fx",
                    values,
                    "user_w1ghfhjfgjfgjfgjsEeOp"
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
            await axios.post(`http://localhost:3001/users`, user);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={"container mt-5"}>
            <Form onSubmit={formik.handleSubmit}>
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
                    <Form.Label>Niveau d'études</Form.Label>
                    <Form.Control
                        type="text"
                        name={"niveau_etudes"}
                        value={formik.values.niveau_etudes}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.niveau_etudes && formik.errors.niveau_etudes && formik.errors.niveau_etudes}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Etablissement</Form.Label>
                    <Form.Control
                        type="text"
                        name={"etablissement"}
                        value={formik.values.etablissement}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.etablissement &&
                        formik.errors.etablissement &&
                        formik.errors.etablissement}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Lieu</Form.Label>
                    <Form.Control
                        type="text"
                        name={"lieu"}
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.city &&
                        formik.errors.city &&
                        formik.errors.city}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Envoyer
                </Button>

            </Form>
        </div>
    );
};

export default AddFormationForm;
