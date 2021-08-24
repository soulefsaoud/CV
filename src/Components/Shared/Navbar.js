import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Auth from "../Contexts/Auth";

// import axios from "axios";

const BootstrapNavbar = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3060/users").then((user) => {
  //     setUsers(user.data);
  //     for (let index = 0; index < user.data.length; index++) {
  //       console.log(user.data[index].id);
  //     }
  //   });
  // }, []);
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  return (
    <div className="mb-4">
      <div className="row">
        <div className="col-md-12 ">
          <Navbar
            id="navbar"
            bg="secondary"
            variant="dark"
            expand="lg"
            sticky="top"
          >
            <Navbar.Brand href="/">
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
                    <li>
                      {" "}
                      <NavDropdown title="Accueil" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/Inscription">
                          S'inscrire
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/Connexion">
                          Se connecter
                        </NavDropdown.Item>
                      </NavDropdown>
                    </li>
                    <li>
                      {" "}
                      <NavDropdown title="Profil" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/MonProfilCv">
                          Profil candidat
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/ProfilEntreprise">
                          Profil entreprise
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/ListUser">
                          Profil administrateur
                        </NavDropdown.Item>
                      </NavDropdown>
                    </li>
                    <li>
                      {" "}
                      <NavDropdown
                        title="Curriculum vitae"
                        id="navbarScrollingDropdown"
                      >
                        <NavDropdown.Item href="/RechercherCv">
                          Rechercher un CV
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/PresentationCV">
                          CV Philiance
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/ListCv">
                          Liste CV
                        </NavDropdown.Item>
                      </NavDropdown>
                    </li>
                    <NavLink className="nav-link" to="/Test">
                      Test
                    </NavLink>
                    <NavLink className="nav-link" to="/ContactPage">
                      Contact
                    </NavLink>
                  </>
                )}
                {/* <Nav.Link as={Link} to="/Email">
                    Les emails
                  </Nav.Link> */}
              </Navbar.Collapse>
            </Nav>
          </Navbar>
        </div>
      </div>
    </div>
  );
};
export default BootstrapNavbar;
