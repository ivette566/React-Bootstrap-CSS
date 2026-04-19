import React from 'react'
import { useState} from 'react'
import Item from './components/item/item'
import { FormTaskAndGoal } from './components/form/form'
import Menu from './components/Menu/Menu'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import AddingMobileButton from './components/AddingMobileButton/AddingMobileButton'
import Modal from 'react-bootstrap/Modal';

function App() {
  const [showModal, setShowModal] = React.useState(false);
  
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div className="App">
      <Menu />

      <Container>
        <Row>
          <Col className="d-none d-md-block">
            <FormTaskAndGoal />
          </Col>

          <Col>
            <div className="d-md-none overlapping-div" onClick={handleShowModal}>
              <AddingMobileButton />
              </div>
              <Row>
                <div className="scrolling">
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                </div>
              </Row>
          </Col>
        </Row>
      </Container>
      
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar tarea/</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormTaskAndGoal onAdd={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default App
