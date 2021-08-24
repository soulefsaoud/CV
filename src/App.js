import React, { useState } from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";

import UserList from "./Components/Users/ListeUtilisateur";
import Homepage from "./Components/Publiq/Home";
import Navbar from "./Components/Shared/Navbar";
import Auth from "./Components/Contexts/Auth";
import InscriptionPage from "./Components/Publiq/Inscription";
import ConnexionPage from "./Components/Publiq/Connexion";
import RechercheCvPage from "./Components/Entreprise/RechercheCv";
import ValidationEmailPage from "./Components/Publiq/ValiderEmail";
import ValiderPassPage from "./Components/Publiq/ValiderMotdePass";
import PresentationCvpage from "./Components/Entreprise/PresentationCv";
import ListeCv from "./Components/Users/ListeCv";
import FooterPage from "./Components/Shared/Footer";
import ProfilPage from "./Components/Users/Profil";
import ProfilEntreprisePage from "./Components/Entreprise/ProfilEntreprise";
// import { hasAuthenticated } from "./Components/Services/AuthApi";
import AuthenticatedRoute from "./Components/Contexts/AuthenticatedRoute";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState();
  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <HashRouter>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/MonProfilCv" component={ProfilPage} />
            <Route
              exact
              path="/ProfilEntreprise"
              component={ProfilEntreprisePage}
            />
            <Route exact path="/ListUser" component={UserList} />
            <Route exact path="/Inscription" component={InscriptionPage} />
            <Route exact path="/Connexion" component={ConnexionPage} />
            <Route exact path="/RechercherCv" component={RechercheCvPage} />
            <Route exact path="/Validation" component={ValidationEmailPage} />
            <Route exact path="/Validationpass" component={ValiderPassPage} />
            <Route exact path="/ListeCv" component={ListeCv} />
            <Route exact path="/RechercheCV" component={RechercheCvPage} />
            <AuthenticatedRoute path="/MonProfilCv" component={ProfilPage} />

            <Route
              exact
              path="/PresentationCV"
              component={PresentationCvpage}
            />
          </Switch>
          <FooterPage />
        </div>
      </HashRouter>
    </Auth.Provider>
  );
}

export default App;
