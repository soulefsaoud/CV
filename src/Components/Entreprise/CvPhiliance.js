import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const CvPhiliancePage = ({ user }) => {
  return (
    <div className="container">
      <h1 className="text-center">
        {user && user.isAuthenticated ? (
          <>
            <div className="divHautCVphiliance mb-4">
              <div className="divTitre">
                <h5 className="text-center w-80">
                  Developpeur Front-End et Back-End
                </h5>
                <p>condidat N 0000</p>
                <p>disponibilite 00/00/00</p>
              </div>
            </div>

            <Row className=" sectionPresentationCV">
              <Col className="cvPhiliance" lg={6}>
                <Card.Img
                  variant="top"
                  src="images/logo_philiance_sourcing.png"
                />
                <Card className="m-4 bg-secondary text-white">
                  <Card.Body>
                    <Card.Title claasName="text-white">PROFIL :</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, ut.
                    </Card.Text>
                    <Card.Title>CENTRES D'INTERETS :</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, ut.
                    </Card.Text>
                    <Card.Title>CONTACT :</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, ut.
                    </Card.Text>
                    <Card.Link>
                      <a href="http://www.philiance.com/">
                        Philiance Formation
                      </a>
                    </Card.Link>
                    <Card.Img
                      className="formation"
                      variant="top"
                      src="images/logo_philiance.png"
                      widht=""
                      height="60"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col className=" cvPhiliance" lg={6}>
                <Card className="mb-4 ">
                  <Card.Body>
                    <Card.Title>Informations</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur, ut.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card className="mb-4 ">
                  <Card.Body>
                    <Card.Title>Contact</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                      ipsum magnam cum architecto! Sapiente aut a ab suscipit
                      libero possimus?
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <Card className="mb-4 ">
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        ) : (
          // <h1 className="text-center">
          //   {" "}
          //   Vous n'êtes pas identifié pour cette page
          // </h1>
          <Redirect to="/" />
        )}
      </h1>
    </div>
  );
};
export default CvPhiliancePage;
