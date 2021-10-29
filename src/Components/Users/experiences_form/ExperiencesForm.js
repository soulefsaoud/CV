import {Button, Col, Form, Row} from "react-bootstrap";
import React, {Fragment} from "react";
import {useFormik} from 'formik';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {useHistory, useParams} from "react-router-dom"

const ExperiencesForm = () => {
    const history = useHistory()
    const {id} = useParams()

    const formik = useFormik({
        initialValues: {
            title: '',
            entreprise: '',
            city: '',
            from: '',
            to: '',
            description: ''
        },
        onSubmit: async values => {
            await saveExperience({id: uuidv4(), user: id, ...values})
            history.goBack()
        },
    });

    const saveExperience = async (user) => {
        try {
            await axios.post('/experiences', user)
            console.log("Success")
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
                            placeholder="Intitulé du poste"
                            name={"title"}
                            value={formik.values.title}
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
                            placeholder="Entreprise"
                            name={"entreprise"}
                            value={formik.values.entreprise}
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
                <Fragment>
                    <Col md={6}>
                        <Form.Group className="mb-3 ">
                            <Form.Control
                                type="date"
                                placeholder="Du"
                                name={"from"}
                                value={formik.values.from}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Form.Group>
                    </Col>
                </Fragment>

                <Fragment>
                    <Col md={6}>
                        <Form.Group className="mb-3 ">
                            <Form.Control
                                type="date"
                                placeholder="Au"
                                name={"to"}
                                value={formik.values.to}
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
                <Button className={"mx-3"} type={"submit"} variant="outline-primary"> Sauvegarder </Button>
                <Button onClick={() => history.goBack()} className={"mx-3"} variant="outline-primary">Annuler</Button>
            </Form.Group>
        </Form>
    )
}
export default ExperiencesForm