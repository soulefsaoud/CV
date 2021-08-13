import React from "react";
import { Button,Image} from "react-bootstrap";

const ReseauSociauxPage = () => {
  return (
    <div className=" text-center">
      <h5> Se connecter avec </h5>
      <div>
      <Button  variant="warning" type="submit" className="mt-4 btn-reseaux">
      <Image
      width={35}
      height={35}
      id="google"  src="/images/Google.png" alt=""/>
       Google   
       </Button>
      </div>
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
