import React from "react";
import { Button } from "react-bootstrap";

const ReseauSociauxPage = () => {
  return (
    <div className=" text-center">
      <h5> Se connecter avec </h5>
      <Button variant="secondary" type="submit" className="mt-4 btn-reseaux">
        <i className="fab fa-google"></i>
        Google
      </Button>

      <br />
      <Button variant="primary" type="submit" className="mt-4 btn-reseaux">
        <i className="fab fa-facebook"></i>
        Facebook
      </Button>
      <br />
      <Button variant="success" type="submit" className="mt-4 btn-reseaux">
        <i className="fab fa-twitter"></i>
        Twitter
      </Button>
      <br />
      <Button variant="dark" type="submit" className="mt-4 btn-reseaux">
        <i className="fab fa-github"></i>
        GitHub
      </Button>
      <br />
      <Button variant="info" type="submit" className="mt-4 btn-reseaux">
        <i className="fab fa-linkedin-in"></i>
        LinkedIn
      </Button>
    </div>
  );
};
export default ReseauSociauxPage;
