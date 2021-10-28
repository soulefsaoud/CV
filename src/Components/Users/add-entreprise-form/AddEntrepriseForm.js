import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import {Button, Form, InputGroup} from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import validate from "../../validations/newEntreprise_valid"

const AddEntrepriseForm = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            id: uuidv4(),
            email: "",
            first_name: "",
            last_name: "",
            telephone: "",
            role: "entreprise",
            entreprise: ""
        },

        validate,
        onSubmit: async (values) => {

            await registerUser({ ...values});
            history.push("/ListUser");
            // emailjs
            //     .send(
            //         "service_ffghfghfghfgm",
            //         "template_gfhfghfghgfh3fx",
            //         values,
            //         "user_w1ghfhjfgjfgjfgjsEeOp"
            //     )
            //     .then(
            //         (result) => {
            //             console.log(result.text);
            //         },
            //         (error) => {
            //             console.log(error.text);
            //         }
            //     );
        },
    });

    const registerUser = async (user) => {
        try {
            await axios.post("http://localhost:3001/users", user);
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
                        type="telephone"
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
                    <Form.Label>Nom de votre entreprise</Form.Label>
                    <Form.Control
                        type="text"
                        name={"entreprise"}
                        value={formik.values.entreprise}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.entreprise &&
                        formik.errors.entreprise &&
                        formik.errors.entreprise}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Envoyer
                </Button>

            </Form>
        </div>
    );
};

export default AddEntrepriseForm;
