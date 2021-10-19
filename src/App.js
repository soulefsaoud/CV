import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import UserList from './Components/Users/ListeUtilisateur'
import Homepage from './Components/Publiq/Home'
import InscriptionPage from './Components/Publiq/Inscription'
import ConnexionPage from './Components/Publiq/Connexion'
import RechercheCvPage from './Components/Entreprise/RechercheCv'
import ValidationEmailPage from './Components/Publiq/ValiderEmail'
import ValiderPassPage from './Components/Publiq/ValiderMotdePass'
import PresentationCvpage from './Components/Entreprise/PresentationCv'
import ListeCv from './Components/Users/ListeCv'
import FooterPage from './Components/Shared/Footer'
import ProfilPage from './Components/Users/Profil'
import ProfilEntreprisePage from './Components/Entreprise/ProfilEntreprise'

import NavPage from './Components/Shared/Navbar'
import MentionsLegalesPage from './Components/Publiq/MentionsLegales'
import ContactPage from './Components/Users/ContactPhilianace'
import ProfilDetailsPage from './Components/Users/ProfilDetails'
import CvPhiliancePage from './Components/Entreprise/CvPhiliance'

function App() {
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
            <UserList />
          </Route>
          <Route exact path='/Connexion'>
            <ConnexionPage />
          </Route>

          <Route exact path='/ProfilDetailsPage'>
            <ProfilDetailsPage />
          </Route>
          <Route exact path='/Connexion'>
            <ConnexionPage />
          </Route>
          <Route exact path='/ProfilEntreprise'>
            <ProfilEntreprisePage />
          </Route>

          <Route exact path='/Inscription'>
            <InscriptionPage />
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
          <Route
            exact
            path='/MentionsLegalesPage'
            component={MentionsLegalesPage}
          />
          <Route exact path='/ContactPage' component={ContactPage} />
        </Switch>
        <FooterPage />
      </div>
    </BrowserRouter>
  )
}

export default App
