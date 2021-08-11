import React from "react";
import { Container, Navbar, Col } from "react-bootstrap";
import { Navigation } from "react-mdl";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container>
          <Col lg={12} className="text-center text-muted">
            <div id="footer" className="d-flex text-center">
              <Navigation>
                <Link id="mentions" to="/MentionsLegalesPage">
                  Mentions Legales
                </Link>

                <Link id="contact" to="/ContactPage">
                  Contacts
                </Link>
                <Link id="faq" to="/">
                  FAQ
                </Link>
              </Navigation>
            </div>
          </Col>
        </Container>
      </Navbar>
    );
  }
}
export default Footer;
