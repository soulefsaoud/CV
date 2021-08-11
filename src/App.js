import "./App.css";
import HomePage from "./Components/Publiq/Home";
import Footer from "./Components/Shared/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ConnexionPage from "./Components/Publiq/Connexion";
import InscriptionPage from "./Components/Publiq/Inscription";
import ProfilPage from "./Components/Users/Profil";
import TestPage from "./Components/Shared/Test";
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

function App() {
  return (
    <Router>
      {/* <HeaderPage /> */}
      <BootstrapNavbar />
      <Route path="/Home">
        <HomePage />
      </Route>
      <Route path="/Connexion">
        <ConnexionPage />
      </Route>
      <Route path="/Inscription">
        <InscriptionPage />
      </Route>
      <Route path="/Profil">
        <ProfilPage />
      </Route>
      <Route path="/Test">
        <TestPage />
      </Route>
      <Route path="/MonProfilCv">
        <ProfilDetailsPage />
      </Route>
      <Route path="/ProfilEntreprise">
        <ProfilEntreprisePage />
      </Route>
      <Route path="/RechercherCv">
        <RechercheCvPage />
      </Route>
      <Route path="/MentionsLegalesPage">
        <MentionsLegalesPage />
      </Route>
      <Route path="/Contact">
        <ContactPage />
      </Route>
      <Route path="/Validation">
        <ValidationEmailPage />
      </Route>
      <Route path="/Validationpass">
        <ValiderPassPage />
      </Route>
      <Route path="/ListUser">
        <UserList />
      </Route>
      <Route path="/Email">
        <ContactUs />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
