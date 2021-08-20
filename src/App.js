import "./App.css";
import HomePage from "./Components/Publiq/Home";
import Footer from "./Components/Shared/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ConnexionPage from "./Components/Publiq/Connexion";
import InscriptionPage from "./Components/Publiq/Inscription";
import ProfilPage from "./Components/Users/Profil";
import ProfilDetailsPage from "./Components/Users/ProfilDetails";
import BootstrapNavbar from "./Components/Shared/Navbar";
import ProfilEntreprisePage from "./Components/Entreprise/ProfilEntreprise";
import RechercheCvPage from "./Components/Entreprise/RechercheCv";
import MentionsLegalesPage from "./Components/Publiq/MentionsLegales";
import ContactPage from "./Components/Users/ContactPhilianace";
import ValidationEmailPage from "./Components/Publiq/ValiderEmail";
import ValiderPassPage from "./Components/Publiq/ValiderMotdePass";
import UserList from "./Components/Users/ListeUtilisateur";
import ContactUs from "./Components/Users/EmailService";
import PresentationCvpage from "./Components/Entreprise/PresentationCv";
import BootstrapHeader from "./Components/Shared/Header";
import ListeCv from "./Components/Users/ListeCv";
import InstructionlPage from "./Components/Publiq/Instruction";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  return (
    <Router>
      <Route path="/PresentationCV">
        <BootstrapHeader />
        <PresentationCvpage />
      </Route>

      <Route path="/RechercherCv">
        <BootstrapHeader />
        <RechercheCvPage />
      </Route>

      <Route exact path="/">
        <BootstrapNavbar />
        <HomePage />
      </Route>

      <Footer />

      <Route path="/Connexion">
        <BootstrapNavbar />
        <ConnexionPage />
      </Route>

      <Route path="/Inscription">
        <BootstrapNavbar />
        <InscriptionPage />
      </Route>

      <Route path="/Profil">
        <BootstrapNavbar />
        <ProfilPage />
      </Route>

      {/* <Route path="/Test">
        <TestPage />
      </Route>   */}

      <Route path="/MonProfilCv">
        <BootstrapNavbar />
        <ProfilDetailsPage />
      </Route>

      <Route path="/ProfilEntreprise">
        <BootstrapNavbar />
        <ProfilEntreprisePage />
      </Route>

      <Route path="/MentionsLegalesPage">
        <BootstrapNavbar />
        <MentionsLegalesPage />
      </Route>

      <Route path="/ContactPage">
        <BootstrapNavbar />
        <ContactPage />
      </Route>

      <Route path="/Validation">
        <BootstrapNavbar />
        <ValidationEmailPage />
      </Route>

      <Route path="/Instruction">
        <BootstrapNavbar />
        <InstructionlPage />
      </Route>

      <Route path="/Validationpass">
        <BootstrapNavbar />
        <ValiderPassPage />
      </Route>

      <Route path="/ListUser">
        <BootstrapNavbar />
        <UserList />
      </Route>

      <Route path="/Email">
        <BootstrapNavbar />
        <ContactUs />
      </Route>
      <Route path="/ListeCv">
        <BootstrapHeader />
        <ListeCv />
      </Route>
    </Router>
  );
}
export default App;
