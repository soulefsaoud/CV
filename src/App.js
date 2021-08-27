import React, { useEffect, useState } from "react";
import { useStorageState } from "react-storage-hooks";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";

import UserList from "./Components/Users/ListeUtilisateur";
import Homepage from "./Components/Publiq/Home";
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

import NavPage from "./Components/Shared/Navbar";
import MentionsLegalesPage from "./Components/Publiq/MentionsLegales";
import ContactPage from "./Components/Users/ContactPhilianace";
import ProfilDetailsPage from "./Components/Users/ProfilDetails";
import CvPhiliancePage from "./Components/Entreprise/CvPhiliance";

function App() {
  const [loggedUser, setLoggedUser] = useStorageState(
    localStorage,
    "loggedUser",
    null
  );

  return (
    <HashRouter>
      <div className="container-fluid">
        <NavPage user={loggedUser} />

        <Switch>
          <Route exact path="/">
            <Homepage user={loggedUser} />
          </Route>
          <Route exact path="/MonProfilCv">
            <ProfilPage user={loggedUser} />
          </Route>
          <Route exact path="/ProfilDetailsPage">
            <ProfilDetailsPage user={loggedUser} />
          </Route>{" "}
          <Route exact path="/Connexion">
            <ConnexionPage setLoggedUser={setLoggedUser} user={loggedUser} />
          </Route>
          <Route exact path="/ProfilEntreprise">
            <ProfilEntreprisePage user={loggedUser} />
          </Route>
          <Route exact path="/ListUser">
            <UserList user={loggedUser} />
          </Route>
          <Route exact path="/ListeCv">
            <ListeCv user={loggedUser} />
          </Route>
          <Route exact path="/Inscription">
            <InscriptionPage setLoggedUser={setLoggedUser} user={loggedUser} />
          </Route>
          <Route exact path="/RechercherCv">
            <RechercheCvPage user={loggedUser} />
          </Route>
          <Route exact path="/ValidationEmail">
            <ValidationEmailPage user={loggedUser} />
          </Route>
          <Route exact path="/Validationpass">
            <ValiderPassPage user={loggedUser} />
          </Route>
          <Route exact path="/RechercheCV">
            <RechercheCvPage user={loggedUser} />
          </Route>
          <Route exact path="/PresentationCV">
            <PresentationCvpage user={loggedUser} />
          </Route>
          <Route exact path="/CvPhiliance">
            <CvPhiliancePage user={loggedUser} />
          </Route>
          <Route
            exact
            path="/MentionsLegalesPage"
            component={MentionsLegalesPage}
          />
          <Route exact path="/ContactPage" component={ContactPage} />
        </Switch>
        <FooterPage />
      </div>
    </HashRouter>
  );
}

export default App;
