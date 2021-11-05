import React, {Fragment, useState, useEffect} from "react";
import Calendar from "react-calendar";
import {Form, Button, Row, Col, Image} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import axios from "axios";


const ExperiencesProfessionnellesPage = () => {
    const {id} = useParams()
    const[users, setUsers]= useState([])
    const [user, setUser] = useState()
    const [exp, setExp] = useState([])

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

    useEffect(() => {
        getExperiences()
    }, [])

    return (
         /* EXPERIENCES PROFESSIONNELLES*/
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
         {/*<p>Adresse: {user && user.address ? user.adress : "Données à renseigner"}</p>*/}
         <Button className={"my-3"} as={Link} to={`/add-experience/${id}`}>Ajouter une expérience</Button>
     </div>
       /* FIN EXPERIENCES PROFESSIONNELLES*/
        )
    } 
    export default ExperiencesProfessionnellesPage
