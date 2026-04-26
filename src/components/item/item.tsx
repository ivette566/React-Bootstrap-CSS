import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';
import type { task } from '../../store/TaskStore';
import type { goal } from '../../store/GoalStore';
import { useTaskStore } from '../../store/TaskStore';
import { useGoalStore } from '../../store/GoalStore';
import { useMenuStore } from '../../store/MenuStore';


const {removeTask} = useTaskStore.getState();
const {removeGoal} = useGoalStore.getState();

function Item(props:task | goal) {
  const removeTask = useTaskStore((state) => state.removeTask);
  const removeGoal = useGoalStore((state) => state.removeGoal);
  const isActiveInMenu = useMenuStore((state) => state.menu.active);

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 

    if ("dueDate" in props) {
      removeGoal(props as goal);
    } else {
      removeTask(props as task);
    }

  };

  return (
<Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className="fw-bold">Descripción</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        {"dueDate" in props && (
          <>
            <Card.Text className="fw-bold">Fecha de Vencimiento</Card.Text>
            <Card.Text className="fw-bold">{props.dueDate}</Card.Text>
          </>
        )}
      </Card.Body>
      <Card.Body>
        <Button onClick={handleRemove}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}
export default Item;


