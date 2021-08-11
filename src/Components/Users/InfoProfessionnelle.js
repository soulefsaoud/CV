import React, { Fragment, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";

const InfoProfesPage = () => {
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
                    placeholder="Disponible a partir du "
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Fragment>
                  <Button onClick={() => setShow(!show)} variant="primary">
                    Calendrier
                  </Button>

                  {show ? <Calendar onChange={setDate} value={date} /> : null}
                </Fragment>
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
export default InfoProfesPage;
