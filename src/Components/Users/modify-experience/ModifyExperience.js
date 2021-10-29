import {Button, Col, Form, Row} from "react-bootstrap";
import React, {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom"

const ModifyExperience = () => {
    const history = useHistory()
    const {exp} = useParams()
    const [experience, setExperience] = useState()
    const [title, setTitle] = useState(experience && experience.title)
    const [entreprise, setEntreprise] = useState()
    const [city, setCity] = useState()
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [description, setDescription] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`/experiences/${exp}`, {title, entreprise, city, from, to, description})
            history.goBack()
        } catch (e) {
            console.error(e.message)
        }
    }

    const fetchExperience = async () => {
        try {
            const {data} = await axios.get(`/experiences/${exp}`)
            setExperience(data)
            setTitle(data.title)
            setEntreprise(data.entreprise)
            setCity(data.city)
            setFrom(data.from)
            setTo(data.to)
            setDescription(data.description)
        } catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        fetchExperience()
    }, [])

    return !experience ? <h1>Loading</h1> : (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                            type="text"
                            placeholder="Intitulé du poste"
                            name={"title"}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
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
                            value={entreprise}
                            onChange={e => setEntreprise(e.target.value)}
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
                            value={city}
                            onChange={e => setCity(e.target.value)}
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
                                value={from}
                                onChange={e => setFrom(e.target.value)}
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
                                value={to}
                                onChange={e => setTo(e.target.value)}
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
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3 ">
                <Button className={"mx-3"} type={"submit"} variant="outline-primary"> Sauvegarder </Button>
                <Button onClick={() => history.goBack()} className={"mx-3"} variant="outline-primary">Annuler</Button>
            </Form.Group>
        </Form>
    )
}
export default ModifyExperience