import React, { Fragment, useState } from "react";
import Calendar from "react-calendar";
import {
  Form,
  Button,
  Row,
  Col,
  FormControl,
  Card,
  CardGroup,
} from "react-bootstrap";

const RechercheCvPage = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  console.log(date.toLocaleDateString());
  return (
    <div className="container mt-5 main">
      <div className="text-center bg-custom border border-success rounded-pill mb-3">
        <h1>Recherche CV</h1>
      </div>
      <div className="">
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
      <div className=" border border-success rounded">
        <div className="rechercheDivHaut m-4">
          <Row>
            <Col>
              <h6 className="titre">Disponibilté</h6>
              <Row>
                <Col>
                  <p>à partir du </p>
                </Col>
                <Col>
                  <Fragment className="d-flex">
                    <Button
                      onClick={() => setShow(!show)}
                      variant="outline-primary"
                    >
                      Calendrier
                    </Button>
                    {show ? <Calendar onChange={setDate} value={date} /> : null}
                  </Fragment>
                </Col>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Disponible actuellement "
                  />
                </Form.Group>
              </Row>
              <h6 className="titre">Contrat</h6>
              <Row>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Contrat Recherché</option>
                    <option value="1">CDD</option>
                    <option value="2">CDI</option>
                    <option value="2">Stage</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
            <Col>
              <h6 className="titre">Experience professionnelle</h6>
              <Row>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Annéees d'experience</option>
                    <option value="1">débutant</option>
                    <option value="2">1-2 ans</option>
                    <option value="2">3-5 ans</option>
                    <option value="2">+5 ans</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
            <Col>
              <h6 className="titre">Formation</h6>
              <Row>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Formation</option>
                    <option value="1">débutant</option>
                    <option value="2">Aucun diplôme</option>
                    <option value="2">Bac</option>
                    <option value="2">Bac +2</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row>
                <h6 className="titre"> Cursus</h6>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option>Cursus</option>
                    <option value="1">DW</option>
                    <option value="2">DWWM</option>
                    <option value="2">Community manager</option>
                    <option value="2">Bac +2</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
            <Col>
              <h6 className="titre"> Langues étrangères</h6>
              <Row>
                <Col>
                  <input type="radio" value="Anglais" name="langues" /> Anglais
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="radio" value="Espagnol" name="langues" />{" "}
                  Espagnol
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="radio" value="Arabe" name="langues" /> Arabe
                </Col>
              </Row>
            </Col>
            <Col>
              <h6 className="titre">Langages de programations</h6>
              <Row>
                <Col>
                  <input type="radio" value="HTML" name="langage" /> HTML
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="radio" value="CSS" name="langage" /> CSS
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="radio" value="Javascript" name="langage" />{" "}
                  Javascript
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="radio" value="PHP" name="langage" /> PHP
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="radio" value="MySQL" name="langage" /> MySQL
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="text-end">
            <Button variant="outline-success" type="submit">
              filtrer
            </Button>
          </div>
        </div>
        <hr />

        <CardGroup>
          <Card className="m-4 border border-success rounded">
            <Card.Body>
              <Card.Img
                className="profil"
                variant="top"
                src="images/couple.png"
                height="55"
              />
              <Card.Title>NOM :</Card.Title>
              <Card.Text>Lorem</Card.Text>
              <Card.Title>PRENOM :</Card.Title>
              <Card.Text>Lorem</Card.Text>
              <Button variant="outline-success" href="/PresentationCv">
                Voir Détails
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-4 border border-success rounded">
            <Card.Body>
              <Card.Img
                className="profil"
                variant="top"
                src="images/couple.png"
                height={55}
              />
              <Card.Title claasName="text-white">NOM :</Card.Title>
              <Card.Text>Lorem</Card.Text>
              <Card.Title>PRENOM :</Card.Title>
              <Card.Text>Lorem</Card.Text>
              <Button variant="outline-success" href="/PresentationCv">
                Voir Détails
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-4 border border-success rounded">
            <Card.Body>
              <Card.Img
                className="profil"
                variant="top"
                src="images/couple.png"
                height={55}
              />
              <Card.Title claasName="text-white">NOM :</Card.Title>
              <Card.Text>Lorem</Card.Text>
              <Card.Title>PRENOM :</Card.Title>
              <Card.Text>Lorem</Card.Text>
              <Button variant="outline-success" href="/PresentationCv">
                Voir Détails
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};
export default RechercheCvPage;
