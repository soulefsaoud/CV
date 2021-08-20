import React, { Component } from "react";
import { Form, Button, Row, Col, FormControl, Card } from "react-bootstrap";

const PresentationCvpage = () => {
  return (
    <main className="main">
      <div>
        <Row className="mb-3">
          <Col>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Rechercher"
                className="mr-2"
                aria-label="Search"
              />
              <Button
                className="fa fa-search"
                variant="outline-success"
              ></Button>
            </Form>
          </Col>
        </Row>
      </div>
      <Row className="sectionPresentationCV ">
        <Col className="cvPhiliance" md={6}>
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
                    <a href="http://www.philiance.com/">Philiance Formation</a>
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="cvPhiliance" md={6}>
          <Card className="mb-4 partieDroite">
            <Card.Body>
              <Card.Title>Informations</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, ut.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4 partieDroite">
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
                magnam cum architecto! Sapiente aut a ab suscipit libero
                possimus?
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4 partieDroite">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default PresentationCvpage;
