import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReseauSociauxPage = () => {
  return (
    <div className=" text-center">
      <h5> Se connecter avec </h5>
      <Button
        variant="warning"
        type="submit"
        className="mt-4 reseauSociauxCnx btn btn-warning"
        href="https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
      >
        <i>
          <Image
            width={35}
            height={35}
            id="google"
            src="/images/Google.png"
            alt=""
          />
        </i>
        Facebook
      </Button>
      <br />

      <Button
        variant="primary"
        href="https://fr-fr.facebook.com/"
        type="submit"
        className="mt-4 reseauSociauxCnx"
      >
        <i className="fab fa-facebook"></i>
        Facebook
      </Button>
      <br />
      <Button
        variant="success"
        href="https://twitter.com"
        type="submit"
        className="mt-4 reseauSociauxCnx"
      >
        <i className="fab fa-twitter"></i>
        Twitter
      </Button>
      <br />
      <Button
        variant="dark"
        href="https://github.com/"
        type="submit"
        className="mt-4 reseauSociauxCnx"
      >
        <i className="fab fa-github"></i>
        GitHub
      </Button>
      <br />
      <Button
        variant="info"
        href="https://www.linkedin.com/home"
        type="submit"
        className="mt-4 reseauSociauxCnx"
      >
        <i className="fab fa-linkedin-in"></i>
        LinkedIn
      </Button>
    </div>
  );
};
export default ReseauSociauxPage;
