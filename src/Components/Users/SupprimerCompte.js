import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SuppComptePage = () => {
  return (
    <div id="">
      <div className="div4 ">
        <h3>Supprimer mon compte</h3>

        <div className="">
          <Form>
            <Row>
              <Col md={4}>
                <Form.Select aria-label="Default select example">
                  <option>Pour quelle raison</option>
                  <option value="1">raison 1</option>
                  <option value="2">raison 2</option>
                </Form.Select>
              </Col>

              <Col>
                <Button variant="danger" type="submit">
                  Supprimer mon profil
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default SuppComptePage;
