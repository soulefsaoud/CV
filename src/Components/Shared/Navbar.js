import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

const NavPage = () => {
  return (
    <div className='text-center'>
      <div className='row'>
        <Navbar
          className='mb-4'
          id='navbar'
          bg='secondary'
          variant='dark'
          expand='lg'
          sticky='top'
        >
          <NavLink to='/'>
            <Carousel>
              <Carousel.Item interval={1500}>
                <img
                  className='philiance'
                  src='/images/logo_philiance.png'
                  alt='First slide'
                />
              </Carousel.Item>

              <Carousel.Item interval={1500}>
                <img
                  className='philiance'
                  src='/images/logo_philiance_sourcing.png'
                  alt='Second slide'
                />
              </Carousel.Item>
            </Carousel>
          </NavLink>

          <Nav className='mx-auto'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/ProfilEntreprise'>
                    Profil entreprise
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/RechercherCv'>
                    Rechercher un CV
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/PresentationCV'>
                    CV Philiance
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink className='nav-link' to='/ListeCv'>
                    Liste CV
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/ListUser'>
                    Liste utilisateur
                  </NavLink>
                </li>
              </ul>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/Connexion'>
                    Se Connecter
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink className='nav-link' to='/Inscription'>
                    S'inscrire
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink className='nav-link' to='/InfoProfessRecruteurPage'>
                  info professs recruteur
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink className='nav-link' to='/ProfilDetails'>
                    Profil details
                  </NavLink>
                </li>

          
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/InfoPersoRecruteurPage'>
                  info perso recruteur
                  </NavLink>
                </li>
              </ul>
         
            </Navbar.Collapse>
          </Nav>
        </Navbar>
      </div>
    </div>
  )
}
export default NavPage
