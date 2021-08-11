import React from "react";
import { Form, Button } from "react-bootstrap";

const InscriptionPage = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Inscription</h1>
      </div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Entrer votre email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre nom" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Premon</Form.Label>
          <Form.Control type="text" placeholder="entrer votre prenom" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Numero de telephone</Form.Label>
          <Form.Control
            type="text"
            placeholder="entrer votre numero de telephone"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="entrer votre mot de passe"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirmer le mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirmer votre mot de passe"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
};

export default InscriptionPage;
