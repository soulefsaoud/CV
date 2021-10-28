


import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Calendar } from "react-calendar";
import { Form, Row, Col } from "react-bootstrap";
import MyDatepickerComponent  from '../Shared/MyDatepickerComponent';




const ListeCv = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());

 

  return (
    <main className="container main ">
       <div className="text-center">
            <div className="text-center bg-custom border border-primary rounded-pill mb-3">
              <h1>Liste des CV</h1>
            </div>
            <div className="rechercheDivHaut mb-4">
              <Row>
                <Col>
                  <h6 className="titre">Disponibilté</h6>
                  <Row>
                    <Col>
                      <p>à partir du </p>
                    </Col>
                    <Col>
                      <Fragment className="d-flex">
                        {/* <Button
                          onClick={() => setShow(!show)}
                          variant="outline-success"
                        >
                         
                        </Button> */}
                        <MyDatepickerComponent/>

{/*              
                              <div>
                                  {show ?                              
                                <Calendar
                                  onChange={onChange}
                                  value={value}
                                />
                                : null}
                              </div>
                             */}
                        {/* {show ? (
                          <Calendar className="Button" onChange={setDate} value={date} />
                        ) : null} */}
                   
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
                        {/* <option>Formation</option> */}
                        <option value="1">Aucun diplôme</option>
                        <option value="2">Bac</option>
                        <option value="2">Bac +2</option>
                        <option value="2">Bac +3/4</option>
                        <option value="2">Bac +5</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <h6 className="titre"> Cursus</h6>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        {/* <option>Cursus</option> */}
                        <option value="1">DW</option>
                        <option value="2">DWWM</option>
                        <option value="3">Community manager</option>
                        <option value="4">Autre</option>
                        {/* <option value="2">Bac +2</option> */}
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <h6 className="titre"> Langues étrangères</h6>

                  <Row>
                    <div className="langue">
                      <input className="checkbox" type="checkbox" value="Anglais" name="langues" />{" "}
                      Anglais
                    </div>
                 
                  
                    <div className="langue">
                      <input className="checkbox" type="checkbox" value="Espagnol" name="langues" />{" "}
                      Espagnol
                    </div>

                    <div className="langue">
                      <input  className="checkbox" type="checkbox" value="Arabe" name="langues" /> Arabe
                    </div>
                    
                  </Row>


                </Col>
                <Col>
                  <h6 className="titre">Langages de programations</h6>
                  <Row>
         
                    <div className="langage">
                      <input  className="checkbox" type="checkbox" value="HTML" name="langage" /> HTML
                      </div>
                
                    <div className="langage">
                      <input  className="checkbox" type="checkbox" value="CSS" name="langage" /> CSS
                      </div>

                
                    <div className="langage">
                      <input  className="checkbox" type="checkbox" value="Javascript" name="langage" />{" "}
                      Javascript
                      </div>
            
                    <div className="langage">
                      <input  className="checkbox" type="checkbox" value="PHP" name="langage" /> PHP
                      </div>
             
               
                    <div className="langage">
                      <input   className="checkbox" className="checkbox" type="checkbox" value="MySQL" name="langage" /> MySQL
                      </div>
          
                  </Row>
                </Col>
              </Row>
              </div>
              <div className="text-end">
                <Button variant="outline-success" type="submit">
                  filtrer
                </Button>
              </div>
            </div>
            <div className=" w-100 border border-success rounded">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nom-Prénom</th>
                    <th>CV publié</th>
                    <th>Dernière activité</th>
                    <th>Supprimer le CV</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td key={user.id}>
                {user.lastname}
                {user.firstname}
              </td>
              <td>{user.email}</td>
              <td>{user.tel}</td> */}
                  {/* <td>
                <Button onClick={() => deleteUser(user.id)}>Delete</Button>
              </td> */}
                  {/* </tr> */}
                </tbody>
              </Table>
              <Link className="btn btn-outline-success m-2" to="/MonProfilCv">
                Ajouter un CV
              </Link>
              <Link className="btn btn-outline-danger m-2" to="/MonProfilCv">
                Supprimer un CV
              </Link>
            </div>
              </main>


  );
};

export default ListeCv;
