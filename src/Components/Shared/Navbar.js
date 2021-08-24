import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import Auth from "../Contexts/Auth";
import { logout } from "../Services/AuthApi";
const BootstrapNavbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return (
    <div className="mb-4">
      <div className="row">
        <div className="col-md-12 ">
          <ul className="navbar-nav mr-auto">
            <Navbar
              id="navbar"
              bg="secondary"
              variant="dark"
              expand="lg"
              sticky="top"
            >
              <Navbar.Brand to="/">
                <Image
                  src="/images/logo_philiance.png"
                  alt="image"
                  width="150"
                  height="50"
                />
              </Navbar.Brand>
              <Nav className="mx-auto ">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  {(!isAuthenticated && (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/Connexion">
                          Se connecter
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/Inscription">
                          S'enregistrer
                        </NavLink>
                      </li>
                    </>
                  )) || (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/MonProfilCv">
                          Profil Condidat
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/ProfilEntreprise">
                          Profil entreprise
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/RechercherCv">
                          Rechercher un CV
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/PresentationCV">
                          CV Philiance
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/ListeCv">
                          Liste CV
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <button
                          className="btn btn-danger"
                          onClick={handleLogout}
                        >
                          Déconnexion
                        </button>
                      </li>
                    </>
                  )}
                </Navbar.Collapse>
              </Nav>
            </Navbar>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BootstrapNavbar;
