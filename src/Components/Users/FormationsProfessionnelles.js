import React, {Fragment, useState, useEffect} from "react";
import Calendar from "react-calendar";
import {Form, Button, Row, Col, Image} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import axios from "axios";


const FormationsProfessionnellesPage = () => {
    const {id} = useParams()
    const[users, setUsers]= useState([])
    const [user, setUser] = useState()
    const [form, setForm] = useState([])

    
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

    useEffect(() => {
        getFormations()
    }, [])


    return (
        <div className={"form__perso mb-5"}>
        <h6 className="titre">Formations</h6>
        {

        !form ? <h1>Formations à renseigner</h1> :
            form.map((e, idy) => (
            <div key={idy} className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Nom de la formation: {e.first_name}</h5>
                    <p className="card-text">Niveau d'études: {e.niveau_etudes}</p>
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

        {/* <p>Adresse: {user && user.address ? user.adress : "Données à renseigner"}</p> */}
        <Button className={"my-3"} as={Link} to={`/add-formation/${id}`}>Ajouter une formation</Button>
        </div> 
    )
    }
    export default FormationsProfessionnellesPage