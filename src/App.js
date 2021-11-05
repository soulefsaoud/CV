import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import UserList from './Components/Users/ListeUtilisateur'
import Homepage from './Components/Publiq/Home'
import Inscription from './Components/Publiq/Inscription'
import ConnexionPage from './Components/Publiq/Connexion'
import RechercheCvPage from './Components/Entreprise/RechercheCv'
import ValidationEmailPage from './Components/Publiq/ValiderEmail'
import ValiderPassPage from './Components/Publiq/ValiderMotdePass'
import PresentationCvpage from './Components/Entreprise/PresentationCv'
import ListeCv from './Components/Users/ListeCv'
import FooterPage from './Components/Shared/Footer'
import ProfilPage from './Components/Users/Profil'
import ProfilEntreprisePage from './Components/Entreprise/ProfilEntreprise'
import InfoPersoPage from './Components/Publiq/InfoPerso'

import NavPage from './Components/Shared/Navbar'
import MentionsLegalesPage from './Components/Publiq/MentionsLegales'
import ContactPage from './Components/Users/ContactPhilianace'
import CvPhiliancePage from './Components/Entreprise/CvPhiliance'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import AddUserForm from "./Components/Users/add-user-form/AddUserForm";
import AddEntrepriseForm from "./Components/Users/add-entreprise-form/AddEntrepriseForm";
import ExperiencesForm from "./Components/Users/experiences_form/ExperiencesForm";
import ModifyExperience from "./Components/Users/modify-experience/ModifyExperience";
import ProfilDetailsPage from './Components/Users/ProfilDetails'
import AddFormationForm from './Components/Users/add-formation-form/AddFormationForm'
import ModifyFormation from './Components/Users/modify-formation/ModifyFormation'
import FormationsForm from './Components/Users/formations_form/FormationsForm'
import CompetencesForm from './Components/Users/competences-form/CompetencesForm'
import AddCompetenceForm from './Components/Users/add-competence-form/AddCompetenceForm'
import ModifyInformationsProfessionnellesPage from './Components/Users/ModifyInformationsProfessionnelles'
import AddModifInformationForm from './Components/Users/add-informations-form/AddInformationForm'
import InformationsForm from './Components/Users/informations-form/InformationsForm'
import ModifyInformation from './Components/Users/ModifyInformation/ModifyInformation'
import AddInfoPersoRecruteurForm from './Components/Entreprise/add-infopersorecruteur-form/AddInfoPersoRecruteurForm'
import ModifyInfoPersoRecruteur from './Components/Entreprise/modify-infopersorecruteur/ModifyInfoPersoRecruteur'
import InfoPersoRecruteurForm from './Components/Entreprise/InfoPersoRecruteurform/InfoPersoRecruteurForm'

function App() {
  const[users, setUsers]= useState([])
  const[loggedUser, setLoggedUser]= useState()

  useEffect(()=>{
    axios.get('http://localhost:3001/users').then(result=>setUsers(result.data))
  },[])
  console.log(users);
  
  useEffect(()=>{
    axios.get('http://localhost:3001/logged').then(result=>setLoggedUser(result.data))
  },[])
  console.log(users);

  useEffect(()=>{
    axios.get('http://localhost:3001/formations').then(result=>setUsers(result.data))
  },[])
  console.log(users);

  useEffect(()=>{
    axios.get('http://localhost:3001/competences').then(result=>setUsers(result.data))
  },[])
  console.log(users);


  useEffect(()=>{
    axios.get('http://localhost:3001/informations').then(result=>setUsers(result.data))
  },[])
  console.log(users);

  useEffect(()=>{
    axios.get('http://localhost:3001/infopersorecruteurs').then(result=>setUsers(result.data))
  },[])
  console.log(users);



  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <NavPage />

        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/ListeCv'>
            <ListeCv />
          </Route>
          <Route exact path='/MonProfilCv'>
            <ProfilPage />
          </Route>
          <Route exact path='/ListUser'>
            <UserList user={loggedUser} />
          </Route>
          <Route exact path='/add-user'>
            <AddUserForm />
          </Route>
          <Route exact path='/add-entreprise'>
            <AddEntrepriseForm />
          </Route>
          <Route exact path='/add-experience/:id'>
            <ExperiencesForm />
          </Route>
          <Route exact path='/modify-experience/:exp'>
            <ModifyExperience />
          </Route>
          <Route exact path='/ProfilDetailsPage/:id'>
            <ProfilDetailsPage />
          </Route>
          <Route exact path='/ProfilEntreprisePage/:id'>
            <ProfilEntreprisePage />
          </Route>
           <Route exact path='/modify-formation/:form'>
            <ModifyFormation />
          </Route>
          <Route exact path='/add-formation/:id'>
            <FormationsForm />
          </Route>
          <Route exact path='/modify-infopersorecruteur/:infoperso'>
            <ModifyInfoPersoRecruteur />
          </Route>

          <Route exact path='/infopersorecruteurform/:id'>
            <InfoPersoRecruteurForm />
          </Route>

          <Route exact path='/add-infopersorecruteur/:id'>
            <AddInfoPersoRecruteurForm />
          </Route>
          <Route exact path='/add-competence/:id'>
            <CompetencesForm />
          </Route>
          <Route exact path='/add-competence'>
            <AddCompetenceForm />
          </Route>
          {/* <Route exact path='/ModifyInformationsProfessionnelles/:id'>
            <ModifyInformationsProfessionnellesPage />
          </Route> */}
          {/* <Route exact path='/add-information/:id'>
            <AddModifInformationForm />
          </Route> */}
          <Route exact path='/add-information/:id'>
            <InformationsForm />
          </Route>
          <Route exact path='/modify-information/:inform'>
            <ModifyInformation />
          </Route>
          <Route exact path='/Connexion'>
            <ConnexionPage />
          </Route>
          <Route exact path='/ProfilEntreprise'>
            <ProfilEntreprisePage />
          </Route>

          <Route exact path='/Inscription'>
            <Inscription />
          </Route>
          <Route exact path='/RechercherCv'>
            <RechercheCvPage />
          </Route>
          <Route exact path='/ValidationEmail'>
            <ValidationEmailPage />
          </Route>
          <Route exact path='/Validationpass'>
            <ValiderPassPage />
          </Route>
          <Route exact path='/RechercheCV'>
            <RechercheCvPage />
          </Route>
          <Route exact path='/PresentationCV'>
            <PresentationCvpage />
          </Route>
          <Route exact path='/CvPhiliance'>
            <CvPhiliancePage />
          </Route>
          <Route exact path='/InfoPerso'>
            <InfoPersoPage />
          </Route>
          <Route
            exact
            path='/MentionsLegalesPage'
            component={MentionsLegalesPage}
          />
          <Route exact path='/ContactPage' component={ContactPage} />
        </Switch>
        {/*<FooterPage />*/}
      </div>
    </BrowserRouter>
  )
}

export default App;
