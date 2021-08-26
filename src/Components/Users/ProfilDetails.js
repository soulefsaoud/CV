import React, { Fragment, useState } from "react";
import Calendar from "react-calendar";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfilDetailsPage = ({ user }) => {
  const [date, setDate] = useState(new Date());
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show, setShow] = useState(false);

  console.log(date.toLocaleDateString());
  return (
    <main className="container main">
      {user && user.isAuthenticated ? (
        <>
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
          <section>
            <h3>CV personalisé</h3>
            <div>
              <Form>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3 ">
                      <Form.Control
                        type="file"
                        placeholder="Importer votre CV"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Check
                        type="checkbox"
                        label="Rendre visible Pour les recruteurs"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
            <div>
              <h3>Créer mon CV au format Philiance </h3>
              <h6 className="titre">Informations personnelles</h6>
              <div className="icons icon1">
                <div>
                  <p>Prénom Nom</p>
                  <p>Adresse</p>
                  <p>Code postal - Ville</p>
                  <p>email</p>
                  <p>numéro de téléphone</p>
                </div>
                <div className="">
                  <Link to="#">
                    <i className="fas fa-pen"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="iconsPlus">
                <h6 className="titre">Experiences professionnelles</h6>
                <i className="fas fa-plus-circle "></i>
              </div>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3 ">
                      <Form.Control
                        type="text"
                        placeholder="Intitulé du poste"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3 ">
                      <Form.Control type="text" placeholder="Entreprise" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3 ">
                      <Form.Control type="text" placeholder="Ville" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Fragment>
                    <Col md={5}>
                      <Form.Group className="mb-3 ">
                        <Form.Control type="text" placeholder="Du" />
                      </Form.Group>
                    </Col>
                    <Col md={1}>
                      <Button onClick={() => setShow(!show)} variant="primary">
                        Calendrier
                      </Button>

                      {show ? (
                        <Calendar onChange={setDate} value={date} />
                      ) : null}
                    </Col>
                  </Fragment>

                  <Fragment>
                    <Col md={5}>
                      <Form.Group className="mb-3 ">
                        <Form.Control type="text" placeholder="Au" />
                      </Form.Group>
                    </Col>
                    <Col md={1}>
                      <Button
                        onClick={() => setShow3(!show3)}
                        variant="primary"
                      >
                        Calendrier
                      </Button>

                      {show3 ? (
                        <Calendar onChange={setDate} value={date} />
                      ) : null}
                    </Col>
                  </Fragment>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Rendre visible Pour les recruteurs"
                  />
                </Form.Group>

                <Form.Group className="mb-3 ">
                  <Form.Control
                    as="textarea"
                    placeholder="Description (recommandé)"
                  />
                </Form.Group>
              </Form>
              <div className="MonProfilButton">
                <Button variant="outline-primary"> Sauvegarder </Button>
                <Button variant="outline-primary"> Annuler </Button>
              </div>
              <div className="borderDiv icons">
                <div>
                  <h6>Développeur from end</h6>
                  <p>Google - Paris(75)</p>
                  <p>Du Juin 2018 à septembre 2020</p>
                </div>
                <div>
                  <Link to="#">
                    <i className="fas fa-pen"></i>
                  </Link>
                  <Link>
                    <i class="far fa-trash-alt"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="iconsPlus">
                <h6 className="titre">Formation</h6>
                <i className="fas fa-plus-circle  "></i>
              </div>

              <Form>
                <Form.Group className="mb-3 ">
                  <Form.Control type="text" placeholder="Nom de la formation" />
                </Form.Group>

                <Form.Group className="mb-3 ">
                  <Form.Control type="text" placeholder="Niveau d'études" />
                </Form.Group>

                <Form.Group className="mb-3 ">
                  <Form.Control type="text" placeholder="Etablissement" />
                </Form.Group>

                <Form.Group className="mb-3 ">
                  <Form.Control type="text" placeholder="Lieu" />
                </Form.Group>

                <Row>
                  <Fragment>
                    <Col md={5}>
                      <Form.Group className="mb-3 ">
                        <Form.Control type="text" placeholder="Du" />
                      </Form.Group>
                    </Col>
                    <Col md={1}>
                      <Button
                        onClick={() => setShow1(!show1)}
                        variant="primary"
                      >
                        Calendrier
                      </Button>

                      {show1 ? (
                        <Calendar onChange={setDate} value={date} />
                      ) : null}
                    </Col>
                  </Fragment>

                  <Fragment>
                    <Col md={5}>
                      <Form.Group className="mb-3 ">
                        <Form.Control type="text" placeholder="Au" />
                      </Form.Group>
                    </Col>
                    <Col md={1}>
                      <Button
                        onClick={() => setShow2(!show2)}
                        variant="primary"
                      >
                        Calendrier
                      </Button>

                      {show2 ? (
                        <Calendar onChange={setDate} value={date} />
                      ) : null}
                    </Col>
                  </Fragment>
                </Row>
              </Form>
              <div>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Check
                        type="checkbox"
                        label="Rendre visible Pour les recruteurs"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={8} className="MonProfilButton">
                    <Button variant="outline-primary"> Sauvegarder </Button>
                    <Button variant="outline-primary"> Annuler </Button>
                  </Col>
                </Row>
              </div>
              <div className="borderDiv icons">
                <div>
                  <h4>Baccalaureat</h4>
                  <p>Lycée ...</p>
                  <p>Marseille</p>
                  <p>langue etrangère</p>
                </div>
                <div className="">
                  <div>
                    <Link to="#">
                      <i className="fas fa-pen"></i>
                    </Link>
                    <Link>
                      <i class="far fa-trash-alt"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="iconsPlus">
                <h6 className="titre">Compétences professionnelles</h6>
                <i className="fas fa-plus-circle"></i>
              </div>

              <Row>
                <Col>
                  <Form.Select
                    aria-label="Default select example"
                    className="mb-3 "
                  >
                    <option>Type de compétence</option>
                    <option value="1"> Lycée...</option>
                    <option value="2">Compétences techniques</option>
                    <option value="3">Langues étrangères</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Compétence" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3 ">
                    <Form.Control type="text" placeholder="Niveau" />
                  </Form.Group>
                </Col>
              </Row>

              <div className="MonProfilButton">
                <Button variant="outline-primary"> Sauvegarder </Button>
                <Button variant="outline-primary"> Annuler </Button>
              </div>
              <Form.Group className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Donnez une titre à votre (Poste recherché)"
                />
              </Form.Group>
              <div className="MonProfilButton">
                <Button variant="success" type="submit">
                  Mettre en ligne
                </Button>
                <Button variant="danger" type="submit">
                  Supprimer
                </Button>
              </div>
            </div>
            <div>
              <h3>Mon CV au format vidéo </h3>
              <Form>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3 ">
                      <Form.Control
                        type="file"
                        placeholder="Importer votre video"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Check
                        type="checkbox"
                        label="Rendre visible Pour les recruteurs"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className=" MonProfilButton">
              <Form>
                <Row>
                  <Col>
                    <Button variant="secondary" type="submit">
                      Voir mon profil
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </section>
        </>
      ) : (
        <h1>Vous n'êtes pas identifié por cette page</h1>
      )}
    </main>
  );
};

export default ProfilDetailsPage;
