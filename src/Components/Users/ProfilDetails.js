import React, {Fragment, useState, useEffect} from "react";
import Calendar from "react-calendar";
import {Form, Button, Row, Col, Image} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import ExperiencesProfessionnellesPage from "./ExperiencesProfessionnelles";
import FormationsProfessionnellesPage from "./FormationsProfessionnelles";
import ModifyInformationsProfessionnellesPage from "./ModifyInformationsProfessionnelles";

const ProfilDetailsPage = () => {
    const {id} = useParams()
    const [user, setUser] = useState()
    const[users, setUsers]= useState([])
    const [exp, setExp] = useState([])
    const [form, setForm] = useState([])
    const [inform, setInform] = useState([])
    const [comp, setComp] = useState([])

    const getExperiences = async () => {
        const {data} = await axios.get(`http://localhost:3001/experiences/`)
        const experiences = data.filter(e => e.user === id)
        console.log(experiences)
        setExp([...experiences])
    }

    const deleteExperience = async id => {
        try {
            await axios.delete(`http://localhost:3001/experiences/${id}`)
            await getExperiences()
        } catch (e) {
            console.error(e.message)
        }
    }

    const getUser = async () => {
        const {data} = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(data)
    }

 
    const getFormations = async () => {
        const {data} = await axios.get(`http://localhost:3001/formations/`)
        const formations = data.filter(e => e.user === id)
        console.log(formations)
        setForm([...formations])
    }
    
    const deleteFormation = async id => {
        try {
            await axios.delete(`http://localhost:3001/formations/${id}`)
            await getFormations()
        } catch (e) {
            console.error(e.message)
        }
    }

    const getCompetences = async () => {
        const {data} = await axios.get(`http://localhost:3001/competences/`)
        const competences = data.filter(e => e.user === id)
        console.log(competences)
        setComp([...competences])
    }

    const deleteCompetence = async id => {
        try {
            await axios.delete(`http://localhost:3001/competences/${id}`)
            await getCompetences()
        } catch (e) {
            console.error(e.message)
        }
    }

    const getInformations = async () => {
        const {data} = await axios.get(`http://localhost:3001/informations/`)
        const informations = data.filter(e => e.user === id)
        console.log(informations)
        setInform([...informations])
    }
    
    const deleteInformation = async id => {
        try {
            await axios.delete(`http://localhost:3001/informations/${inform}`)
            await getInformations()
        } catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        getInformations()
    }, [])


    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        getExperiences()
    }, [])

    useEffect(() => {
        getFormations()
    }, [])


    useEffect(() => {
        getCompetences()
    }, [])

    const [date, setDate] = useState(new Date());
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showAvatar, setShowAvatar] = useState(false);
    const [avatar, setAvatar] = useState("");

    const sendAvatar = async(e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:3001/users/${id}`, {avatar})
            await getUser()
        } catch (e) {
            console.error(e.message)
        }
    }

    const registerUser = async (user) => {
      try {
        await axios.post('http://localhost:3001/users', user);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      axios
        .get('http://localhost:3001/users')
        .then((result) => setUsers(result.data));
    }, []);

  console.log("users " + user);
    // return !user ? <h1>Chargement en cours ...</h1> : (
         return(
        <Fragment>
            <div>
                <Row className="d-flex align-items-center">
                    <Col xs={6} md={2}>
                        {/* <Image style={{height: 150, width: 150, objectFit: "cover"}} className={"img-fluid rounded"} src={user.avatar ? user.avatar : "https://picsum.photos/100"} roundedCircle/> */}
                    </Col>
                    <Col>
                        <h1>{user ? `Profil de ${user.first_name} ${user.last_name}` : "Chargement"}</h1>
                    </Col>
                </Row>
            </div>
            <hr/>
            <section>
                <h3>CV personalis??</h3>
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

                <h3 className={"mb-5"}>Cr??er mon CV au format Philiance </h3>
{/* 
            <ModifyInformationsProfessionnellesPage /> */}

                     {/* <div className={"info__perso"}> */}
                    {/* <h6 className="titre">Informations personnelles</h6>
                    <p>Nom complet: {user ? user.first_name + ' ' + user.last_name : "Chargement"}</p>
                    <p>Email: {user ? user.email : "Chargement"}</p>
                    <p>T??l??phone: {user ? user.telephone : "Chargement"}</p>
                     <p>Adresse: {user && user.address ? user.adress : "Donn??e ?? renseigner"}</p> */}

                 <div className={"form__perso mb-5"}>
            <h6 className="titre">Formations</h6>
            {

             !inform ? <h1>Formations ?? renseigner</h1> :
                inform.map((e, idi) => (
                    <div key={idi} className="card mb-3">
                     <div className="card-body">
                    <h5 className="card-title">Nom: {e.first_name}</h5>
                    <p className="card-text">Prenom: {e.last_name}</p>
                    <p className="card-text">Email: {e.email}</p>
                    <p className="card-text">Adresse: {e.address}</p>
                    <p className="card-text">Telephone: {e.telephone}</p>

                    <Link to={`/modify-information/${e.id}`} className="card-link btn btn-warning">
                     <i className="fas fa-pen"></i>
                    </Link>
                   {/* <Button as={Link} to={`/modify-information/${e.id}`}>Modifier mes donn??es</Button> */}
                    {/* <Button variant={"info"} onClick={() => setShowAvatar(!showAvatar)}>Ajouter une image</Button>  */}
                               

                    <button onClick={() => deleteFormation(e.id)}
                            className="card-link btn btn-danger">
                               <i className="fas fa-times"></i>
                    </button>
                    
                        {/* showAvatar && ( */}
                            {/* <Form onSubmit={sendAvatar} className={"w-25 my-3"}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Votre avatar</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name={"avatar"}
                                        value={avatar}
                                        onChange={(e) => setAvatar(e.target.value)}
                                    />
                                </Form.Group> */}
                                {/* <button type={"submit"} className={"btn btn-primary"}>Envoyer</button> */}
                            {/* </Form> */}
                        {/* ) */}
                      
             </div>
                </div>
                ))

                        }
                        </div>

                <hr className={"my-5"}/>

                    <ExperiencesProfessionnellesPage />

                {/* EXPERIENCES PROFESSIONNELLES*/}
                {/* <div className={"exp__perso mb-5"}>
                    <h6 className="titre">Experiences professionnelles</h6>
                    {
                        !exp ? <h1>Exp??riences professionnelles ?? renseigner</h1> :
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
                    {/*<p>Adresse: {user && user.address ? user.adress : "Donn??e ?? renseigner"}</p>*/}
                    {/* <Button className={"my-3"} as={Link} to={`/add-experience/${id}`}>Ajouter une exp??rience</Button>
                </div> */} 
                {/* FIN EXPERIENCES PROFESSIONNELLES */}



                {/* <div>
                    <div className="borderDiv icons">
                        <div>
                            <h6>D??veloppeur from end</h6>
                            <p>Google - Paris(75)</p>
                            <p>Du Juin 2018 ?? septembre 2020</p>
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
                </div> */}
                <div>
                    {/* <div className="iconsPlus">
                        <h6 className="titre">Formation</h6>
                        <i className="fas fa-plus-circle  "></i>
                    </div> */}

                    <FormationsProfessionnellesPage />

                {/* FORMATIONS*/}
                {/* <div className={"form__perso mb-5"}>
                                    <h6 className="titre">Formations</h6>
                                    {
                        
                          !form ? <h1>Formations ?? renseigner</h1> :
                                 form.map((e, idy) => (
                                <div key={idy} className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Nom de la formation: {e.first_name}</h5>
                                        <p className="card-text">Niveau d'??tudes: {e.niveau_etudes}</p>
                                        <p className="card-text">Etablissement: {e.etablissement}</p>
                                        <p className="card-text">Lieu: {e.city}</p>
                                        <Link to={`/modify-formation/${e.id}`} className="card-link btn btn-warning">
                                            <i className="fas fa-pen"></i>
                                        </Link>
                                        <button onClick={() => deleteFormation(e.id)}
                                                className="card-link btn btn-danger">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                              </div>
                                 ))
                            } 
                    
                    {/* <p>Adresse: {user && user.address ? user.adress : "Donn??es ?? renseigner"}</p> */}
                    {/* <Button className={"my-3"} as={Link} to={`/add-formation/${id}`}>Ajouter une formation</Button>
                </div>  */} 
                {/* FIN FORMATIONS */}


                    {/* <Form>
                        <Form.Group className="mb-3 ">
                            <Form.Control type="text" placeholder="Nom de la formation"/>
                        </Form.Group>

                        <Form.Group className="mb-3 ">
                            <Form.Control type="text" placeholder="Niveau d'??tudes"/>
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
                    </Form> */}
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
                            <p>Lyc??e ...</p>
                            <p>Marseille</p>
                            <p>langue etrang??re</p>
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
        {/* COMPETENCES PROFESSIONNELLES*/}
        <div className={"exp__perso mb-5"}>
                        <h6 className="titre">Comp??tences professionnelles</h6>
                         {
                        !comp ? <h1>Comp??tences professionnelles ?? renseigner</h1> :
                            comp.map((e, idx) => (
                                <div key={idx} className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Titre: {e.title}</h5>
                                        <p className="card-text">Etablissement: {e.etablissement}</p>
                                        <p className="card-text">Ville: {e.city}</p>
                                        <p className="card-text">Cursus: {e.cursus}</p>
                                        <h6 className="card-subtitle mb-2 text-muted">Du: {e.from} - Au: {e.to}</h6>
                                        <Link to={`/modify-competence/${e.id}`} className="card-link btn btn-warning">
                                            <i className="fas fa-pen"></i>
                                        </Link>
                                        <button onClick={() => deleteCompetence(e.id)}
                                                className="card-link btn btn-danger">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                    }
                    {/*<p>Adresse: {user && user.address ? user.adress : "Donn??e ?? renseigner"}</p>*/}
                    <Button className={"my-3"} as={Link} to={`/add-competence/${id}`}>Ajouter une comp??tence</Button>
                </div>
                {/* FIN EXPERIENCES PROFESSIONNELLES*/}


                    {/* <div className="iconsPlus">
                        <h6 className="titre">Comp??tences professionnelles</h6>
                        <i className="fas fa-plus-circle"></i>
                    </div>

                    <Row>
                        <Col>
                            <Form.Select
                                aria-label="Default select example"
                                className="mb-3 "
                            >
                                <option>Type de comp??tence</option>
                                <option value="1"> Lyc??e...</option>
                                <option value="2">Comp??tences techniques</option>
                                <option value="3">Langues ??trang??res</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Comp??tence"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 ">
                                <Form.Control type="text" placeholder="Niveau"/>
                            </Form.Group>
                        </Col>
                    </Row> */}

                    <div className="MonProfilButton">
                        <Button variant="outline-primary"> Sauvegarder </Button>
                        <Button variant="outline-primary"> Annuler </Button>
                    </div>
                    <Form.Group className="mb-3 ">
                        <Form.Control
                            type="text"
                            placeholder="Donnez une titre ?? votre (Poste recherch??)"
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
                    <h3>Mon CV au format vid??o </h3>
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
