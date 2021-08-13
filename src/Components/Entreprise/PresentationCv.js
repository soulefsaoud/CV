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
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Col>
        </Row>
      </div>
      <section className="sectionPresentationCV">
        <div className="cvPhiliance">
          <div className="divHautCVphiliance mb-4">
            <div className="divTitre">
              <h5 className="text-center w-80">
                Developpeur Front-End et Back-End
              </h5>
              <p>condidat N 0000</p>
              <p>disponibilite 00/00/00</p>
            </div>
          </div>

          <div className=" sectionPresentationCV">
            <div className="cvPhiliance">
              <Card.Img
                variant="top"
                src="images/logo_philiance_sourcing.png"
              />
            </div>
            <div className=" cvPhiliance">
              <div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="cvPhiliance ">
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
        </div>
      </section>
    </main>
  );
};

export default PresentationCvpage;