import React, { useState, useEffect } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import InfoPersoRecruteurPage from './InfoPersoRecruteur'
import InfoProfessRecruteurPage from './InfoProfessRecruteur'
import InfoConnexPage from '../Users/InfoConnexion'
import SuppComptePage from '../Users/SupprimerCompte'
import ReseauSociauxPage from '../Users/ReseauxSociaux'
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const ProfilEntreprisePage = ({  }) => {
  const [date] = useState(new Date())
  const {id} = useParams()
  const [user, setUser] = useState()
  // const [show, setShow] = useState(false);

  const getUser = async () => {
    const {data} = await axios.get(`http://localhost:3001/users/${id}`)
    setUser(data)
}

  useEffect(() => {
        getUser()
    }, [])

  console.log(date.toLocaleDateString())
  return (
    <main className='container main'>
      <div>
        <Row className='d-flex align-items-center'>
          <Col xs={6} md={2}>
            <Image src='https://picsum.photos/100' roundedCircle />
          </Col>
          <Col>
            <h1>Profil Entreprise </h1>
            <div>
        <Row className="d-flex align-items-center">
          <Col xs={6} md={2}>
            {/* <Image style={{height: 150, width: 150, objectFit: "cover"}} className={"img-fluid rounded"} src={user.avatar ? user.avatar : "https://picsum.photos/100"} roundedCircle/> */}
          </Col>
          <Col>
            <h1>{user ? `Profil de ${user.first_name}` : "Chargement"}</h1>
          </Col>
        </Row>
        </div>
          </Col>
        </Row>
        </div>
      <hr />
     
      <section id='sectionID'>
        <div id='profilDiv1'>
          <InfoPersoRecruteurPage />
          <InfoProfessRecruteurPage />
          <InfoConnexPage />
          <SuppComptePage />
        </div>
        <div id='profilDiv2'>
          <h4 className='text-center'>Réseaux sociaux</h4>

          <div className='reseauSociauxCnx'>
            <ReseauSociauxPage />
          </div>
        </div>
      </section>
    </main>
  )
}
export default ProfilEntreprisePage
