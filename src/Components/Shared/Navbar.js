import React, { useContext } from "react";
import { Figure, Navbar, Image, Nav } from "react-bootstrap";
import Auth from "../Contexts/Auth";
import { logout } from "../Services/AuthApi";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import {} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const NavPage = ({ user }) => {
  // const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  let history = useHistory();
  const handleLogout = () => {
    logout();
    history.push("/Connexion");

    window.location.reload();
  };

  return (
    <div className="text-center">
      <div className="row">
        <Navbar
          className="mb-4"
          id="navbar"
          bg="secondary"
          variant="dark"
          expand="lg"
          sticky="top"
        >
          <NavLink to="/">
            <Carousel>
              <Carousel.Item interval={1500}>
                <img
                  className="philiance"
                  src="/images/logo_philiance.png"
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item interval={1500}>
                <img
                  className="philiance"
                  src="/images/logo_philiance_sourcing.png"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </NavLink>

          <Nav className="mx-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {user && user.isAuthenticated ? (
                <>
                  <ul className="navbar-nav mr-auto">
                    {user && user.role !== "admin" ? (
                      <>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/MonProfilCv">
                            Profil Condidat
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <>
                        {user && user.entreprise === "oui" ? (
                          <>
                            <li className="nav-item">
                              <NavLink
                                className="nav-link"
                                to="/ProfilEntreprise"
                              >
                                Profil entreprise
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink className="nav-link" to="/RechercherCv">
                                Rechercher un CV
                              </NavLink>
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="nav-item">
                              <NavLink
                                className="nav-link"
                                to="/PresentationCV"
                              >
                                CV Philiance
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink className="nav-link" to="/RechercherCv">
                                Rechercher un CV
                              </NavLink>
                            </li>

                            <li className="nav-item">
                              <NavLink className="nav-link" to="/ListeCv">
                                Liste CV
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink className="nav-link" to="/ListUser">
                                Liste utilisateur
                              </NavLink>
                            </li>
                          </>
                        )}
                      </>
                    )}
                  </ul>
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <button className="btn btn-danger" onClick={handleLogout}>
                        Déconnexion
                      </button>
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Connexion">
                        Se Connecter
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Inscription">
                        S'inscrire
                      </NavLink>
                    </li>
                  </ul>
                </>
              )}
            </Navbar.Collapse>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};
export default NavPage;
