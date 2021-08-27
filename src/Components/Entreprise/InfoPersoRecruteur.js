import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const InfoPersoRecruteurPage = () => {
  return (
    <div className="div1">
      <h3>Mes informations personnelles</h3>

      <div>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Raison sociale" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Nom de l'entreprise" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Adresse" />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Code postal" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Ville" />
              </Form.Group>
            </Col>
          </Row>

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
        </Form>
      </div>
    </div>
  );
};
export default InfoPersoRecruteurPage;
