import React, { Fragment, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";

function InfoProfessRecruteurPage() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  console.log(date.toLocaleDateString());
  return (
    <div>
      <div className="div2">
        <h3>Mes informations professionnelles</h3>

        <div>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Poste recherché" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Select aria-label="Default select example">
                  <option>Type de contrat</option>
                  <option value="1">CDD</option>
                  <option value="2">CDI</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Disponible a partir du " />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Fragment>
                  <Button onClick={() => setShow(!show)} variant="primary">
                    Calendrier
                  </Button>

                  {show ? <Calendar className="Button" onChange={setDate} value={date} /> : null}
                </Fragment>
              </Col>
              <Col md={6}>
                <Form.Select aria-label="Default select example">
                  <option>Domaine</option>
                  <option value="1">domaine1</option>
                  <option value="2">domaine2</option>
                </Form.Select>
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
}
export default InfoProfessRecruteurPage;
