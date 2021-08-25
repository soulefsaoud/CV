import React from "react";
import { Figure, Navbar, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HomePage = ({ user }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">
        {user && user.isAuthenticated
          ? "Bonjour " + user.email
          : "Vous n'êtes pas identifié"}
      </h1>
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
