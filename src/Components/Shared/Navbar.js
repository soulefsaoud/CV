import React, { useContext } from "react";
import { Figure, Navbar, Image, Nav } from "react-bootstrap";
import Auth from "../Contexts/Auth";
import { logout } from "../Services/AuthApi";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const NavPage = ({ user }) => {
  // const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  let history = useHistory();
  const handleLogout = () => {
    logout();
    history.push("/");
    window.location.reload();
  };

  return (
    <div className="text-center">
      <div className="row">
        {user && user.isAuthenticated ? (
          <Navbar
            className="mb-4"
            id="navbar"
            bg="secondary"
            variant="dark"
            expand="lg"
            sticky="top"
          >
            <NavLink to="/">
              <Image
                src="/images/logo_philiance.png"
                alt="image"
                width="150"
                height="50"
              />
            </NavLink>
            <Nav className="mx-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav mr-auto">
                  {user && user.isadmin !== "admin" ? (
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/MonProfilCv">
                        Profil Condidat
                      </NavLink>
                    </li>
                  ) : (
                    <>
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
                        <NavLink className="nav-link" to="/ListUser">
                          Liste utilisateur
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </Navbar.Collapse>
            </Nav>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Déconnexion
                </button>
              </li>
            </ul>
          </Navbar>
        ) : (
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
            <Nav>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav mr-auto">
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
                </ul>
              </Navbar.Collapse>
            </Nav>
          </Navbar>
        )}
      </div>
    </div>
  );
};
export default NavPage;
