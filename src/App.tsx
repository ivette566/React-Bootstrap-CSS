import Item from './components/item/item'
import { FormTaskAndGoal } from './components/form/form'
import Menu from './components/Menu/Menu'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import AddingMobileButton from './components/AddingMobileButton/AddingMobileButton'

function App() {
  return (
    <div className="App">
      <Menu />

      <Container>
        <Row>
          <Col className="d-none d-md-block">
            <FormTaskAndGoal />
          </Col>

          <Col>
          <div className="d-md-none overlapping-div">
            <AddingMobileButton />
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  
  )
}

export default App