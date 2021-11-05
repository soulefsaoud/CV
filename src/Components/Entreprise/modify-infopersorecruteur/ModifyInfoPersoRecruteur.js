
import {Button, Col, Form, Row} from "react-bootstrap";
import React, {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {useHistory, useParams}  from "react-router-dom";

const ModifyInfoPersoRecruteur = () => {
    const history = useHistory()
    const {infoperso} = useParams()
    const [infopersorecrutement, setInfoPersoRecruteur] = useState()
    const [first_name, setFirstName] = useState(infopersorecrutement && infopersorecrutement.first_name)
    const [sociale, setSociale] = useState()
    const [city, setCity] = useState()
    const [code_postale, setCodePostale] = useState()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:3001/infopersorecruteurs/${infoperso}`, {first_name, sociale,  city, code_postale})
            history.goBack()
        } catch (e) {
            console.error(e.message)
        }
    }

    const fetchInfoPersoRecruteur = async () => {
        try {
            const {data} = await axios.get(`http://localhost:3001/infopersorecruteurs/${infoperso}`)
            setInfoPersoRecruteur(data)
            setFirstName(data.first_name)
            setSociale(data.sociale)
            setCity(data.city)
            setCodePostale(data.code_postale)
            
           } catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        fetchInfoPersoRecruteur()
    }, [])

    // return !information ? <h1>Loading</h1> : (
        return (  
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
                            placeholder="Sociale"
                            name={"sociale"}
                            value={sociale}
                            onChange={e => setSociale(e.target.value)}
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
                                type="text"
                                placeholder="Code Postale"
                                name={"code_postale"}
                                value={code_postale}
                                onChange={e => setCodePostale(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Fragment>

                
            </Row>

        
            <Form.Group className="mb-3 ">
                <Button className={"mx-3"} type={"submit"} variant="outline-primary"> Sauvegarder </Button>
                <Button onClick={() => history.goBack()} className={"mx-3"} variant="outline-primary">Annuler</Button>
            </Form.Group>
        </Form>
    )
}
export default ModifyInfoPersoRecruteur;