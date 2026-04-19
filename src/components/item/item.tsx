import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';

function Item() {
  return (
<Card >
  <Card.Body>
    <Card.Title>Meta 1</Card.Title>
    <Card.Text className="fw-bold">
      Descripción 
      </Card.Text>
    <Card.Text>
      Descripción 1
    </Card.Text>
    <Card.Text className="fw-bold">
      Fecha de Vencimiento
    </Card.Text>
    <Card.Text className="fw-bold">
      15/05/2026
    </Card.Text>
    </Card.Body>
    <Card.Body>
    <Button variant="primary">Eliminar</Button>
  </Card.Body>
</Card>
  );
}
export default Item;


