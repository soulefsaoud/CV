import React from "react";
import { Figure } from "react-bootstrap";
import { useState } from "react";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="text-center">
      <h1>Bienvenue sur votre CV-Thèque</h1>
      <Figure>
        <Figure.Image
          width={1200}
          height={1000}
          alt=""
          src="/images/library.jpg"
        />
      </Figure>
    </div>
  );
};
export default HomePage;
