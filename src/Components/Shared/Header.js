import React from "react";
import { Link } from "react-router-dom";
import { Layout, Navigation, Header, Content } from "react-mdl";

const HeaderPage = () => {
  return (
    <div style={{ height: "100px", position: "relative" }}>
      <Layout fixedHeader>
        <Header
          title={
            <span>
              <Link to="/" style={{ color: "#ddd" }}>
                <strong>CV-Thèque</strong>
              </Link>
            </span>
          }
        >
          <Navigation>
            <Link to="/Home">Accueil</Link>
            <Link to="/Connexion">Se Connecter</Link>
            <Link to="/Inscription">S'inscrire</Link>
            <Link to="/Profil">Profil</Link>
            <Link to="/MonProfilCv">Mon profil CV</Link>
            <Link to="/Test">Test</Link>
          </Navigation>
        </Header>
        <Content />
      </Layout>
    </div>
  );
};

export default HeaderPage;
