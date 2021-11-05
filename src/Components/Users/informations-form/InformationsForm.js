// import {Button, Col, Form, Row} from "react-bootstrap";
// import React, {Fragment} from "react";
// import {useFormik} from 'formik';
// import axios from "axios";
// import { v4 as uuidv4 } from 'uuid';
// import {useHistory, useParams} from "react-router-dom"

// const InformationsForm = () => {
//     const history = useHistory()
//     const {id} = useParams()

//     const formik = useFormik({
//         initialValues: {
//             Nom: '',
//             Prenom: '',
//             Email: '',
//             Adresse: '',
//             Telephone: ''
          
//         },
//         onSubmit: async values => {
//             await saveInformation({id: uuidv4(), user: id, ...values})
//             history.goBack()
//         },
//     });

//     const saveInformation = async (user) => {
//         try {
//             await axios.post('/informations', user)
//             console.log("Success");
//         } catch (e) {
//             console.error(e.message)
//         }
//     }

//     return (
//         <Form onSubmit={formik.handleSubmit}>
//             <Row>
//                 <Col>
//                     <Form.Group className="mb-3 ">
//                         <Form.Control
//                             type="text"
//                             placeholder="Prénom"
//                             name={"first_name"}
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
//                             placeholder="Nom"
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
//                             placeholder="email"
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
//                             placeholder="telephone"
//                             name={"cursus"}
//                             value={formik.values.telephone}
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
//                                 placeholder="adresse"
//                                 name={"adresse"}
//                                 value={formik.values.address}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                             />
//                         </Form.Group>
//                     </Col>
//                 </Fragment>

//                  </Row>

//             <Form.Group className="mb-3 ">
//                 <Button className={"mx-3"} type={"submit"} variant="outline-primary"> Sauvegarder </Button>
//                 <Button onClick={() => history.goBack()} className={"mx-3"} variant="outline-primary">Annuler</Button>
//             </Form.Group>
//         </Form>
//     )
// }
// export default InformationsForm


import {Button, Col, Form, Row} from "react-bootstrap";
import React, {Fragment} from "react";
import {useFormik} from 'formik';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {useHistory, useParams} from "react-router-dom"

const InformationsForm = () => {
    const history = useHistory()
    const {id} = useParams()

    const formik = useFormik({
        initialValues: {
            // id: uuidv4(),
             first_name: '',
            last_name:'',
            email:'',
            address:'',
          telephone:'',
           },
        onSubmit: async values => {
            await saveIformation({id: uuidv4(), user: id, ...values})
            history.goBack()
            
        },
    });

    const saveIformation= async (user) => {
        try {
            await axios.post('/informations', user)
            console.log("Success" + user)
        } catch (e) {
            console.error(e.message)
        }
    }

return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <Col>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                           type="text"
                           name={"first_name"}
                           placeholder="nom"
                           value={formik.values.first_name}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                            type="text"
                            placeholder="Prenom"
                            name={"last_name"}
                            value={formik.values.last_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                            type="text"
                            placeholder="Email"
                            name={"email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Fragment>
                    <Col md={6}>
                        <Form.Group className="mb-3 ">
                            <Form.Control
                                type="text"
                                placeholder="Adresse"
                                name={"adresse"}
                                value={formik.values.adresse}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Group>
                    </Col>
                </Fragment>

              
            </Row>
            <Row>
                <Fragment>
                    <Col md={6}>
                        <Form.Group className="mb-3 ">
                            <Form.Control
                                type="text"
                                placeholder="telephone"
                                name={"telephone"}
                                value={formik.values.telephone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Group>
                    </Col>
                </Fragment>

              
            </Row>

            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="Rendre visible Pour les recruteurs"
                />
            </Form.Group>

    

            <Form.Group className="mb-3 ">
                <Button  className={"mx-3"} type={"submit"} variant="outline-primary"> Sauvegarder </Button>
                <Button onClick={() => history.goBack()} className={"mx-3"} variant="outline-primary">Annuler</Button>
            </Form.Group>
        </Form>
    )
}
export default InformationsForm