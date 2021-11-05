import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import {Button, Form, InputGroup} from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import validate from "../../validations/newEntreprise_valid"

const AddCompetenceForm = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            title: '',
            etablissement: '',
            city: '',
            cursus: '',
            to: ''
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
            await axios.post("http://localhost:3001/competences", user);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={"container mt-5"}>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name={"title"}
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.title &&
                        formik.errors.title &&
                        formik.errors.title}
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
                    <Form.Label>City</Form.Label>
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
                    <Form.Label>Cursus</Form.Label>
                    <Form.Control
                        type="text"
                        name={"cursus"}
                        value={formik.values.cursus}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.cursus && formik.errors.cursus && formik.errors.cursus}
                    </Form.Text>
                </Form.Group>

               
                <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        name={"to"}
                        value={formik.values.to}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.to &&
                        formik.errors.to &&
                        formik.errors.to}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Envoyer
                </Button>

            </Form>
        </div>
    );
};

export default AddCompetenceForm;
