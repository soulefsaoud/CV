import React, { useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import InfoPersoRecruteurPage from './InfoPersoRecruteur'
import InfoProfessRecruteurPage from './InfoProfessRecruteur'
import InfoConnexPage from '../Users/InfoConnexion'
import SuppComptePage from '../Users/SupprimerCompte'
import ReseauSociauxPage from '../Users/ReseauxSociaux'

const ProfilEntreprisePage = ({ user }) => {
  const [date] = useState(new Date())
  // const [show, setShow] = useState(false);

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
