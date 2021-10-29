import React, {Fragment, useState, useEffect} from "react";
import Calendar from "react-calendar";
import {Form, Button, Row, Col, Image} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import axios from "axios";


const ProfilDetailsPage = () => {
    const {id} = useParams()
    const [user, setUser] = useState()
    const [exp, setExp] = useState([])

    const getExperiences = async () => {
        const {data} = await axios.get(`/experiences/`)
        const experiences = data.filter(e => e.user === id)
        console.log(experiences)
        setExp([...experiences])
    }

    const deleteExperience = async id => {
        try {
            await axios.delete(`/experiences/${id}`)
            await getExperiences()
        } catch (e) {
            console.error(e.message)
        }
    }

    const getUser = async () => {
        const {data} = await axios.get(`/users/${id}`)
        setUser(data)
    }


    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        getExperiences()
    }, [])

    const [date, setDate] = useState(new Date());
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showAvatar, setShowAvatar] = useState(false);
    const [avatar, setAvatar] = useState("");

    const sendAvatar = async(e) => {
        e.preventDefault()
        try {
            await axios.patch(`/users/${id}`, {avatar})
            await getUser()
        } catch (e) {
            console.error(e.message)
        }
    }

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


    return !user ? <h1>Chargement en cours ...</h1> : (
        <Fragment>
            <div>
                <Row className="d-flex align-items-center">
                    <Col xs={6} md={2}>
                        <Image style={{height: 150, width: 150, objectFit: "cover"}} className={"img-fluid rounded"} src={user.avatar ? user.avatar : "https://picsum.photos/100"} roundedCircle/>
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

                <h3 className={"mb-5"}>Créer mon CV au format Philiance </h3>


                <div className={"info__perso"}>
                    <h6 className="titre">Informations personnelles</h6>
                    <p>Nom complet: {user ? user.first_name + ' ' + user.last_name : "Chargement"}</p>
                    <p>Email: {user ? user.email : "Chargement"}</p>
                    <p>Téléphone: {user ? user.telephone : "Chargement"}</p>
                    {/*<p>Adresse: {user && user.address ? user.adress : "Donnée à renseigner"}</p>*/}
                    <Button as={Link} to={"#!"}>Modifier mes données</Button>
                    <Button variant={"info"} onClick={() => setShowAvatar(!showAvatar)}>Ajouter une image</Button>

                    {
                        showAvatar && (
                            <Form onSubmit={sendAvatar} className={"w-25 my-3"}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Votre avatar</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name={"avatar"}
                                        value={avatar}
                                        onChange={(e) => setAvatar(e.target.value)}
                                    />
                                </Form.Group>
                                <button type={"submit"} className={"btn btn-primary"}>Envoyer</button>
                            </Form>
                        )
                    }
                </div>

                <hr className={"my-5"}/>

                {/* EXPERIENCES PROFESSIONNELLES*/}
                <div className={"exp__perso mb-5"}>
                    <h6 className="titre">Experiences professionnelles</h6>
                    {
                        !exp ? <h1>Expériences professionnelles à renseigner</h1> :
                            exp.map((e, idx) => (
                                <div key={idx} className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Titre: {e.title}</h5>
                                        <p className="card-text">Entreprise: {e.entreprise}</p>
                                        <p className="card-text">Ville: {e.city}</p>
                                        <p className="card-text">Description du poste: {e.description}</p>
                                        <h6 className="card-subtitle mb-2 text-muted">Du: {e.from} - Au: {e.to}</h6>
                                        <Link to={`/modify-experience/${e.id}`} className="card-link btn btn-warning">
                                            <i className="fas fa-pen"></i>
                                        </Link>
                                        <button onClick={() => deleteExperience(e.id)}
                                                className="card-link btn btn-danger">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                    }
                    {/*<p>Adresse: {user && user.address ? user.adress : "Donnée à renseigner"}</p>*/}
                    <Button className={"my-3"} as={Link} to={`/add-experience/${id}`}>Ajouter une expérience</Button>
                </div>
                {/* FIN EXPERIENCES PROFESSIONNELLES*/}

                <div>
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
        </Fragment>
    )

}


export default ProfilDetailsPage;
