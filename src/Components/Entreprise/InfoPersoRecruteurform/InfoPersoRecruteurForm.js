import {Button, Col, Form, Row} from "react-bootstrap";
import React, {Fragment} from "react";
import {useFormik} from 'formik';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {useHistory, useParams} from "react-router-dom"

const InfoPersoRecruteurForm = () => {
    const history = useHistory()
    const {id} = useParams()

    const formik = useFormik({
        initialValues: {
            first_name: '',
            sociale: '',
            city: '',
            code_postale: ''
           
          
        },
        onSubmit: async values => {
            await saveInfoPersoRecruteur({id: uuidv4(), user: id, ...values})
            history.goBack()
        },
    });

    const saveInfoPersoRecruteur = async (user) => {
        try {
            await axios.post('/infopersorecruteurs', user)
            console.log("Success");
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
                            placeholder="Nom"
                            name={"first_name"}
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
                            placeholder="Sociale"
                            name={"sociale"}
                            value={formik.values.sociale}
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
                            placeholder="Ville"
                            name={"city"}
                            value={formik.values.city}
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
                            placeholder="Code postale"
                            name={"code_postale"}
                            value={formik.values.code_postale}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Group>
                </Col>
            </Row>
            
            
            
            <Form.Group className="mb-3 ">
                <Button className={"mx-3"} type={"submit"} variant="outline-primary"> Sauvegarder </Button>
                <Button onClick={() => history.goBack()} className={"mx-3"} variant="outline-primary">Annuler</Button>
            </Form.Group>
        </Form>
    )
}
export default InfoPersoRecruteurForm