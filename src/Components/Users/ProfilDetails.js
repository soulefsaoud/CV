import React, {Fragment, useState, useEffect} from "react";
import Calendar from "react-calendar";
import {Form, Button, Row, Col, Image} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import InfoPerso from "../Publiq/InfoPerso";
import axios from "axios";


const ProfilDetailsPage = () => {
    const {id} = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        const getUser = async() => {
            const {data} = await axios.get(`http://localhost:3001/users/${id}`)
            setUser(data)
        }
        getUser()
    }, [])
    const [date, setDate] = useState(new Date());
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show, setShow] = useState(false);

    // const registerUser = async (user) => {
    //   try {
    //     await axios.post("http://localhost:3002/users", user);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // useEffect(() => {
    //   axios
    //     .get("http://localhost:3002/users")
    //     .then((result) => setUsers(result.data));
    // }, []);


    return (
        <>
            <div>
                <Row className="d-flex align-items-center">
                    <Col xs={6} md={2}>
                        <Image src="https://picsum.photos/100" roundedCircle/>
                    </Col>
                    <Col>
                        <h1>{user ? `Profil de ${user.first_name} ${user.last_name}` : "Chargement"}</h1>
                    </Col>
                </Row>
            </div>
            <hr/>
            <section>
                <h3>CV personalisé</h3>
                <div>
                    <Form>
                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-3 ">
                                    <Form.Control
                                        type="file"
                                        placeholder="Importer votre CV"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="Rendre visible Pour les recruteurs"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </div>

                <h3>Créer mon CV au format Philiance </h3>
                <h6 className="titre">Informations personnelles</h6>
                <div className="icons icon1">
                    <div>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder={user && user.first_name}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder={user && user.last_name}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Adresse"/>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Code postal"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Ville"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <p>Adresse</p>
                        <p>Code postal - Ville</p>
                        <p>email</p>
                        <p>numéro de téléphone</p>
                    </div>
                    <div className=""><Link to="/InfoPerso">Modifier</Link></div>
                </div>

                <Link to="chart" target="_blank" to="/InfoPerso">Test</Link>
                <Link to="/InfoPerso" className="btn btn-primary">Sign up</Link>
                <InfoPerso/>


                <div>
                    <div className="iconsPlus">
                        <h6 className="titre">Experiences professionnelles</h6>
                        <i className="fas fa-plus-circle "></i>
                    </div>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 ">
                                    <Form.Control
                                        type="text"
                                        placeholder="Intitulé du poste"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 ">
                                    <Form.Control type="text" placeholder="Entreprise"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 ">
                                    <Form.Control type="text" placeholder="Ville"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Fragment>
                                <Col md={5}>
                                    <Form.Group className="mb-3 ">
                                        <Form.Control type="text" placeholder="Du"/>
                                    </Form.Group>
                                </Col>
                                <Col md={1}>
                                    <Button onClick={() => setShow(!show)} variant="primary">
                                        Calendrier
                                    </Button>

                                    {show ? (
                                        <Calendar onChange={setDate} value={date}/>
                                    ) : null}
                                </Col>
                            </Fragment>

                            <Fragment>
                                <Col md={5}>
                                    <Form.Group className="mb-3 ">
                                        <Form.Control type="text" placeholder="Au"/>
                                    </Form.Group>
                                </Col>
                                <Col md={1}>
                                    <Button
                                        onClick={() => setShow3(!show3)}
                                        variant="primary"
                                    >
                                        Calendrier
                                    </Button>

                                    {show3 ? (
                                        <Calendar onChange={setDate} value={date}/>
                                    ) : null}
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
                            />
                        </Form.Group>
                    </Form>
                    <div className="MonProfilButton">
                        <Button variant="outline-primary"> Sauvegarder </Button>
                        <Button variant="outline-primary"> Annuler </Button>
                    </div>
                    <div className="borderDiv icons">
                        <div>
                            <h6>Développeur from end</h6>
                            <p>Google - Paris(75)</p>
                            <p>Du Juin 2018 à septembre 2020</p>
                        </div>
                        <div>
                            <Link to="#">
                                <i className="fas fa-pen"></i>
                            </Link>
                            <Link>
                                <i className="far fa-trash-alt"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="iconsPlus">
                        <h6 className="titre">Formation</h6>
                        <i className="fas fa-plus-circle  "></i>
                    </div>

                    <Form>
                        <Form.Group className="mb-3 ">
                            <Form.Control type="text" placeholder="Nom de la formation"/>
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Control type="text" placeholder="Niveau d'études"/>
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Control type="text" placeholder="Etablissement"/>
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Control type="text" placeholder="Lieu"/>
                        </Form.Group>

                        <Row>
                            <Fragment>
                                <Col md={5}>
                                    <Form.Group className="mb-3 ">
                                        <Form.Control type="text" placeholder="Du"/>
                                    </Form.Group>
                                </Col>
                                <Col md={1}>
                                    <Button
                                        onClick={() => setShow1(!show1)}
                                        variant="primary"
                                    >
                                        Calendrier
                                    </Button>

                                    {show1 ? (
                                        <Calendar onChange={setDate} value={date}/>
                                    ) : null}
                                </Col>
                            </Fragment>

                            <Fragment>
                                <Col md={5}>
                                    <Form.Group className="mb-3 ">
                                        <Form.Control type="text" placeholder="Au"/>
                                    </Form.Group>
                                </Col>
                                <Col md={1}>
                                    <Button
                                        onClick={() => setShow2(!show2)}
                                        variant="primary"
                                    >
                                        Calendrier
                                    </Button>

                                    {show2 ? (
                                        <Calendar onChange={setDate} value={date}/>
                                    ) : null}
                                </Col>
                            </Fragment>
                        </Row>
                    </Form>
                    <div>
                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="Rendre visible Pour les recruteurs"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={8} className="MonProfilButton">
                                <Button variant="outline-primary"> Sauvegarder </Button>
                                <Button variant="outline-primary"> Annuler </Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="borderDiv icons">
                        <div>
                            <h4>Baccalaureat</h4>
                            <p>Lycée ...</p>
                            <p>Marseille</p>
                            <p>langue etrangère</p>
                        </div>
                        <div className="">
                            <div>
                                <Link to="#">
                                    <i className="fas fa-pen"></i>
                                </Link>
                                <Link>
                                    <i className="far fa-trash-alt"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="iconsPlus">
                        <h6 className="titre">Compétences professionnelles</h6>
                        <i className="fas fa-plus-circle"></i>
                    </div>

                    <Row>
                        <Col>
                            <Form.Select
                                aria-label="Default select example"
                                className="mb-3 "
                            >
                                <option>Type de compétence</option>
                                <option value="1"> Lycée...</option>
                                <option value="2">Compétences techniques</option>
                                <option value="3">Langues étrangères</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Compétence"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 ">
                                <Form.Control type="text" placeholder="Niveau"/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="MonProfilButton">
                        <Button variant="outline-primary"> Sauvegarder </Button>
                        <Button variant="outline-primary"> Annuler </Button>
                    </div>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                            type="text"
                            placeholder="Donnez une titre à votre (Poste recherché)"
                        />
                    </Form.Group>
                    <div className="MonProfilButton">
                        <Button variant="success" type="submit">
                            Mettre en ligne
                        </Button>
                        <Button variant="danger" type="submit">
                            Supprimer
                        </Button>
                    </div>
                </div>
                <div>
                    <h3>Mon CV au format vidéo </h3>
                    <Form>
                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-3 ">
                                    <Form.Control
                                        type="file"
                                        placeholder="Importer votre video"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="Rendre visible Pour les recruteurs"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className=" MonProfilButton">
                    <Form>
                        <Row>
                            <Col>
                                <Button variant="secondary" type="submit">
                                    Voir mon profil
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>
        </>
    )

}


export default ProfilDetailsPage;
