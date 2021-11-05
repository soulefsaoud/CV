// import React from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const InfoPersoRecruteurPage = () => {
//   return (
//     <div className="div1">
//       <h3>Mes informations personnelles</h3>

//       <div>
//         <Form>
//           <Row>
//             <Col>
//               <Form.Group className="mb-3">
//                 <Form.Control type="text" placeholder="Raison sociale" />
//               </Form.Group>
//             </Col>
//             <Col>
//               <Form.Group className="mb-3">
//                 <Form.Control type="text" placeholder="Nom de l'entreprise" />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Form.Group className="mb-3">
//             <Form.Control type="text" placeholder="Adresse" />
//           </Form.Group>

//           <Row>
//             <Col>
//               <Form.Group className="mb-3">
//                 <Form.Control type="text" placeholder="Code postal" />
//               </Form.Group>
//             </Col>
//             <Col>
//               <Form.Group className="mb-3">
//                 <Form.Control type="text" placeholder="Ville" />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row>
//             <Col md={4}>
//               <Form.Group className="mb-3 ">
//                 <Form.Control
//                   type="file"
//                   placeholder="Modifier la photo de profil"
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Form.Group className="mb-3">
//             <Link>Supprimer la photo de profil</Link>
//           </Form.Group>
//           <div className="modifProfil">
//             <Button variant="success" type="submit">
//               modifier mon profil
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };
// export default InfoPersoRecruteurPage;


import React, {Fragment, useState, useEffect} from "react";
import Calendar from "react-calendar";
import {Form, Button, Row, Col, Image} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import axios from "axios";


const InfoPersoRecruteurPage = () => {
    const {id} = useParams()
    const[users, setUsers]= useState([])
    const [user, setUser] = useState()
    const [infoperso, setInfoperso] = useState([])

    
    const getInfoPersoRecruteur = async () => {
        const {data} = await axios.get(`http://localhost:3001/infopersorecruteurs/`)
        const InfoPersoRecruteurs = data.filter(e => e.user === id)
        console.log(InfoPersoRecruteurs)
        setInfoperso([...InfoPersoRecruteurs])
    }
    
    const deleteInfoPersoRecruteur = async id => {
        try {
            await axios.delete(`http://localhost:3001/infopersorecruteurs/${id}`)
            await getInfoPersoRecruteur()
        } catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        getInfoPersoRecruteur()
    }, [])


    return (
        <div className={"form__perso mb-5"}>
        <h6 className="titre">Mes informations personnelles</h6>
        {
         
            // !infoperso ? <h1>Mes informations personnelles</h1> :
             infoperso.map((e, idi) => (
              <div key={idi} className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Sociale: {e.sociale}</h5>
                    <h5 className="card-title">Nom: {e.first_name}</h5>
                    <p className="card-text">Code Postale: {e.code_postale}</p>
                     <p className="card-text">Lieu: {e.city}</p>
                    <Link to={`/modify-infopersorecruteur/${e.id}`} className="card-link btn btn-warning">
                      <i className="fas fa-pen"></i>
                    </Link> 
                    <button onClick={() => deleteInfoPersoRecruteur(e.id)}
                      className="card-link btn btn-danger">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
             )
             )
        } 
          <Row>
                     <Col md={4}>
                       <Form.Group className="mb-3 ">
                         <Form.Control
                          type="file"
                          placeholder="Modifier la photo de profil"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
        
                  <Form.Group className="mb-3">
                    <Link>Supprimer la photo de profil</Link>
                  </Form.Group>
                  <div className="modifProfil">
                    <Button variant="success" type="submit">
                      modifier mon profil
                    </Button>
        </div>
      </div>
       )}
    
    
    export default InfoPersoRecruteurPage