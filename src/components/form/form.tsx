import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.scss'
import { useTaskStore } from '../../store/TaskStore'; 
import { useGoalStore } from '../../store/GoalStore';
import { useMenuStore } from '../../store/MenuStore';
import { useRef } from 'react';

type FormTaskAndGoalProps = {
  onAdd?: () => void;
};

function FormTaskAndGoal({onAdd}: FormTaskAndGoalProps) {

  const inputRefName = useRef<HTMLInputElement>(null);
  const inputRefDescription = useRef<HTMLTextAreaElement>(null);
  const inputRefDueDate = useRef<HTMLInputElement>(null);
  const isActiveInMenu = useMenuStore((state: { menu: { active: any; }; }) => state.menu.active)
  const addTask = useTaskStore((state: { addTask: any; }) => state.addTask);
  const addGoal = useGoalStore((state: { addGoal: any; }) => state.addGoal);
  

  const handleSubmit = (e: React.SubmitEvent) =>{
    e.preventDefault();
    const name = inputRefName.current?.value;
    const description = inputRefDescription.current?.value;
    const dueDate = inputRefDueDate.current?.value;
    if (name && description && dueDate) {
      if (isActiveInMenu === 'tasks'){
        addTask({ id: Date.now(), name, description, dueDate});
       } else {
        addGoal({ id: Date.now(), name, description, dueDate});
       }
      if(onAdd){
      onAdd();
    }
    }
  }
  return (
    <div className='space form-margin'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={inputRefName} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control as="textarea" rows={3} ref={inputRefDescription} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date"  ref={inputRefDueDate}/> 
        </Form.Group>

        <Button type="submit" variant="info">Add Goal</Button>
      </Form>
    </div>
  );
}
export { FormTaskAndGoal };
