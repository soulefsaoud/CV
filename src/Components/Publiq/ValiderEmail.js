import React from "react";
import { Button } from "react-bootstrap";

const ValidationEmailPage = () => {
  return (
    <div className=" container divValidation">
      <div className="text-center mb-3">
        <h3>Valider votre email</h3>
      </div>
      <div className="divForm">
        <form className="mb-3">
          <input type="text" placeholder="Code de validation" />
        </form>
        <Button variant="success" type="submit">
          Valider
        </Button>
      </div>
    </div>
  );
};

export default ValidationEmailPage;
