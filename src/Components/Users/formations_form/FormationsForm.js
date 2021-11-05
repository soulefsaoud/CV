import {Button, Col, Form, Row} from "react-bootstrap";
import React, {Fragment} from "react";
import {useFormik} from 'formik';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {useHistory, useParams} from "react-router-dom"

const FormationsForm = () => {
    const history = useHistory()
    const {id} = useParams()

    const formik = useFormik({
        initialValues: {
            id: uuidv4(),
            first_name: '',
            niveau_etudes:'',
            etablissement:'',
            lieu:'',
           },
        onSubmit: async values => {
            await saveFormation({id: uuidv4(), user: id, ...values})
            history.goBack()
            
        },
    });

    const saveFormation= async (user) => {
        try {
            await axios.post('/formations', user)
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
                            placeholder="niveau d'études"
                            name={"niveau_etudes"}
                            value={formik.values.niveau_etudes}
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
                            placeholder="Etablissement"
                            name={"etablissement"}
                            value={formik.values.etablissement}
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
                                placeholder="Lieu"
                                name={"lieu"}
                                value={formik.values.city}
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
                <Form.Control
                    as="textarea"
                    placeholder="Description (recommandé)"
                    name={"description"}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </Form.Group>

            <Form.Group className="mb-3 ">
                <Button  className={"mx-3"} type={"submit"} variant="outline-primary"> Sauvegarder </Button>
                <Button onClick={() => history.goBack()} className={"mx-3"} variant="outline-primary">Annuler</Button>
            </Form.Group>
        </Form>
    )
}
export default FormationsForm