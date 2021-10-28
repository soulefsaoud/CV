import React from 'react'
import { useStorageState } from 'react-storage-hooks'
import { Form, Button, Row, Col, FormControl, Card } from 'react-bootstrap'
import CvPhiliancePage from './CvPhiliance'

const PresentationCvpage = ({ user }) => {
  const [loggedUser, setLoggedUser] = useStorageState(
    localStorage,
    'loggedUser',
    null
  )
  return (
    <main className='main'>
      <div>
        <Row className='mb-3'>
          <Col>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Rechercher'
                className='mr-2'
                aria-label='Search'
              />
              <Button
                className='fa fa-search'
                variant='outline-success'
              ></Button>
            </Form>
          </Col>
        </Row>
      </div>
      <Row className='sectionPresentationCV '>
        <Col className='cvPhiliance' md={6}>
          <CvPhiliancePage />
        </Col>

        <Col className=' cvPhiliance' md={6}>
          <Card className='mb-4 partieDroite'>
            <Card.Body>
              <Card.Title>Informations</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, ut.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className='mb-4 partieDroite'>
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
                magnam cum architecto! Sapiente aut a ab suscipit libero
                possimus?
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className='mb-4 partieDroite'>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  )
}

export default PresentationCvpage;
