import { useEffect } from "react";
import './App.scss'
import { use, useState } from 'react'
import Item from './components/item/item'
import { FormTaskAndGoal } from './components/form/form'
import Menu from './components/Menu/Menu'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import AddingMobileButton from './components/AddingMobileButton/AddingMobileButton'
import Modal from 'react-bootstrap/Modal';
import { useTaskStore } from './store/TaskStore';
import { useGoalStore } from './store/GoalStore';
import { useMenuStore } from './store/MenuStore';

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  
  const tasks = useTaskStore((state) => state.tasks);
  const goals = useGoalStore((state) => state.goals);
  const isActiveInMenu = useMenuStore((state) => state.menu.active);

  useEffect(() => {
    useTaskStore.getState().setTask([
      { id: 1, name: 'Tarea 1', description: 'Descripcion de la tarea 1', dueDate: '2024-12-31'},
      { id: 2, name: 'Tarea 2', description: 'Descripcion de la tarea 2', dueDate: '2024-11-30'},

    ]);

     useGoalStore.getState().setGoals([
      { id: 1, name: 'Tarea 1', description: 'Descripcion de la tarea 1', dueDate: '2024-12-31'},
      { id: 2, name: 'Tarea 2', description: 'Descripcion de la tarea 2', dueDate: '2024-11-30'},

    ]);

     useMenuStore.getState().setActive('tasks');
  }, []);


  return (
    <div className="App">
      <Menu />

      <Container>
        <Row>
          <Col className="d-none d-md-block">
            <FormTaskAndGoal />
          </Col>

          <Col>
          <div className="d-md-none overlapping-div" onClick={handleOpenModal}>
            <AddingMobileButton />
                        </div>
            <Row>
              <div className="scrolling">
            {isActiveInMenu==='tasks' ? (
              tasks.map((task) => (
                <Item key={task.id} {...task} />
              ))
            ) : (
              goals.map((goal) => (
                <Item key={goal.id} {...goal} />
              ))
            )}
              </div>
            </Row>

          </Col>
        </Row>
      </Container>
      <Modal show={showModal} ONhide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar tarea</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormTaskAndGoal onAdd={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </div>
  
  )
}

export default App


