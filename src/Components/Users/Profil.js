import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import InfoPersoPage from "./InfoPersonelle";
import InfoProfesPage from "./InfoProfessionnelle";
import InfoConnexPage from "./InfoConnexion";
import SuppComptePage from "./SupprimerCompte";
import ReseauSociauxPage from "./ReseauxSociaux";

const ProfilPage = ({ user }) => {
  return (
    <main className="container main">
      <>
          {" "}
          <div>
            <Row className="d-flex align-items-center">
              <Col xs={6} md={2}>
                <Image src="https://picsum.photos/100" roundedCircle />
              </Col>
              <Col>
                <h1>Mon profil</h1>
              </Col>
            </Row>
          </div>
          <hr />
          <section id="sectionID">
            <div id="profilDiv1">
              <InfoPersoPage />
              <InfoProfesPage />
              <InfoConnexPage />
              <SuppComptePage />
            </div>
            <div id="profilDiv2">
              <h4 className="text-center">Réseaux sociaux</h4>
              <p>
                Reliez votre compte à un réseau social pour l'utiliser comme
                moyen de connexion
              </p>
              <div className="reseauSociauxCnx">
                <ReseauSociauxPage />
              </div>
            </div>
          </section>
        </>
    </main>
  );
};
export default ProfilPage;
