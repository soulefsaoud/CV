import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import {Button, Form, InputGroup} from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import validate from "../../validations/newEntreprise_valid"

const AddInfoPersoRecruteurForm = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            // id: uuidv4(),
            first_name: "",
             sociale:"",
            city:"",
             code_postale:"",
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
                    <Form.Label>Nom</Form.Label>
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
                    <Form.Label>Sociale</Form.Label>
                    <Form.Control
                        type="text"
                        name={"sociale"}
                        value={formik.values.sociale}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.sociale && formik.errors.sociale && formik.errors.sociale}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>ville</Form.Label>
                    <Form.Control
                        type="text"
                        name={"city"}
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

                <Form.Group className="mb-3">
                    <Form.Label>Code Postale</Form.Label>
                    <Form.Control
                        type="text"
                        name={"CodePostale"}
                        value={formik.values.code_postale}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.code_postale &&
                        formik.errors.code_postale &&
                        formik.errors.code_postale}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Envoyer
                </Button>

            </Form>
        </div>
    );
};

export default AddInfoPersoRecruteurForm;
