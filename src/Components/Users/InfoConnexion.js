import { Form, Button, Row, Col } from "react-bootstrap";

const InfoConnexPage = () => {
  return (
    <div>
      <div className="div3">
        <h3>Mes informations de connexion</h3>

        <div>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Email de contact" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Confirmer l'email" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Mot de passe" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Confirmer le mot de passe"
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="modifProfil">
              <Button variant="success" type="submit">
                modifier mon profil
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default InfoConnexPage;
