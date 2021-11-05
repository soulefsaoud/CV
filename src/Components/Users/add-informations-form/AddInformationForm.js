// import {Button, Col, Form, Row} from "react-bootstrap";
// import React, {Fragment, useState, useEffect} from "react";
// import {useFormik} from 'formik';
// import axios from "axios";
// import { v4 as uuidv4 } from 'uuid';
// import {useHistory, useParams} from "react-router-dom"

// const AddModifInformationForm = () => {
//     const history = useHistory()
   

//     const formik = useFormik({
//         initialValues: {
//         Nom: '',
//         Prenom: '',
//         Email: '',
//         Adresse: '',
//         Telephone: ''
          
//         },
//         onSubmit: async (values) => {

//             await registerUser({ ...values});
//             history.goBack()
//             // emailjs
//             //     .send(
//             //         "service_ffghfghfghfgm",
//             //         "template_gfhfghfghgfh3fx",
//             //         values,
//             //         "user_w1ghfhjfgjfgjfgjsEeOp"
//             //     )
//             //     .then(
//             //         (result) => {
//             //             console.log(result.text);
//             //         },
//             //         (error) => {
//             //             console.log(error.text);
//             //         }
//             //     );
//         },
//     });


//     const registerUser = async (user) => {
//         try {
//             await axios.post(`http://localhost:3001/users`, user);
//         } catch (error) {
//             console.error(error);
//         }
//     };
    
   
//     // return !modifyinformation ? <h1>Loading</h1> : (
//     return (
       
//         <Form onSubmit={formik.handleSubmit}>
//             <Row>
//                 <Col>
//                     <Form.Group className="mb-3 ">
//                         <Form.Control
//                             type="text"
//                             placeholder="nom"
//                             value={formik.values.first_name}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Group className="mb-3 ">
//                         <Form.Control
//                             type="text"
//                             placeholder="Prénom"
//                             name={"last_name"}
//                             value={formik.values.last_name}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Group className="mb-3 ">
//                         <Form.Control
//                             type="text"
//                             placeholder="Email"
//                             name={"email"}
//                             value={formik.values.email}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Group className="mb-3 ">
//                         <Form.Control
//                             type="text"
//                             placeholder="Adresse"
//                             name={"adresse"}
//                             value={formik.values.adresse}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row>
//                 <Fragment>
//                     <Col md={6}>
//                         <Form.Group className="mb-3 ">
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Téléphone"
//                                 name={"telephone"}
//                                 value={formik.values.telephone}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                             />
//                         </Form.Group>
//                     </Col>
//                 </Fragment>

               
//             </Row>


//             <Form.Group className="mb-3 ">
//                 <Button className={"mx-3"} type={"submit"} variant="outline-primary"> Sauvegarder </Button>
//                 <Button onClick={() => history.goBack()} className={"mx-3"} variant="outline-primary">Annuler</Button>
//             </Form.Group>
//         </Form>
//     )
// }
// export default AddModifInformationForm


import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import {Button, Form, InputGroup} from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import validate from "../../validations/newEntreprise_valid"

const AddIformationForm = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            // id: uuidv4(),
            first_name: "",
            last_name:"",
            email:"",
            address:"",
            telephone:"",
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
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        type="text"
                        name={"last_name"}
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.last_name && formik.errors.last_name && formik.errors.last_name}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
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
                    <Form.Label>adresse</Form.Label>
                    <Form.Control
                        type="text"
                        name={"adress"}
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.address &&
                        formik.errors.address &&
                        formik.errors.address}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>telephone</Form.Label>
                    <Form.Control
                        type="text"
                        name={"telephone"}
                        value={formik.values.telephone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.telephone &&
                        formik.errors.telephone &&
                        formik.errors.telephone}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Envoyer
                </Button>

            </Form>
        </div>
    );
};

export default AddIformationForm;
