import {Button, Col, Form, Row} from "react-bootstrap";
import React, {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom"

const ModifyFormation = () => {
    const history = useHistory()
    const {form} = useParams()
    const [formation, setFormation] = useState()
    const [first_name, setFirstName] = useState(formation && formation.first_name)
    const [lieu, setLieu] = useState()
    const [niveau_etudes, setNiveauEtudes] = useState()
    const [etablissement, setEtablissement] = useState()
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:3001/formations/${form}`, {first_name, niveau_etudes, etablissement, lieu})
            history.goBack()
        } catch (e) {
            console.error(e.message)
        }
    }

    const fetchFormation = async () => {
        try {
            const {data} = await axios.get(`http://localhost:3001/formations/${form}`)
            setFormation(data)
            setFirstName(data.first_name)
            setNiveauEtudes(data.niveau_etudes)
            setLieu(data.city)
            setEtablissement(data.etablissement)
           } catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        fetchFormation()
    }, [])

    return !formation ? <h1>Loading</h1> : (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                            type="text"
                            placeholder="Intitulé du poste"
                            name={"first_name"}
                            value={first_name}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                            type="text"
                            placeholder="Formation"
                            name={"formation"}
                            value={formation}
                            onChange={e => setFormation(e.target.value)}
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
                            name={"lieu"}
                            value={lieu}
                            onChange={e => setLieu(e.target.value)}
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
                                placeholder="Etablissement"
                                name={"etablissement"}
                                value={etablissement}
                                onChange={e => setEtablissement(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Fragment>

                <Fragment>
                    <Col md={6}>
                        <Form.Group className="mb-3 ">
                            <Form.Control
                                type="text"
                                placeholder="Niveau d'études"
                                name={"niveau_etudes"}
                                value={niveau_etudes}
                                onChange={e => setNiveauEtudes(e.target.value)}
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
                <Button className={"mx-3"} type={"submit"} variant="outline-primary"> Sauvegarder </Button>
                <Button onClick={() => history.goBack()} className={"mx-3"} variant="outline-primary">Annuler</Button>
            </Form.Group>
        </Form>
    )
}
export default ModifyFormation;