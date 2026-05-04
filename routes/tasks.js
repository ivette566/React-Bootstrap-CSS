/* eslint-disable no-undef */
var express = require('express');
var router = express.Router();

let tasks = [
    {id_: 1, name: 'Tasks 1', description: 'Description for task 1', duedate: '2024-06-30'},
    {id_: 2, name: 'Tasks 2', description: 'Description for task 2', duedate: '2024-07-15'},
    {id_: 3, name: 'Tasks 3', description: 'Description for task 3', duedate: '2024-07-30'},
];

// GET: obtener todas las tareas
router.get('/getTasks', (req, res) => {
    res.json(tasks);
});

// POST: agregar una nueva tarea con validación
router.post('/addTask', (req, res) => {
    if (!req.body || !req.body.name || !req.body.description || !req.body.duedate) {
        return res.status(400).json({ error: 'Faltan campos en el body' });
    }

    const { name, description, duedate } = req.body;
    const newTask = {
        id_: Math.floor(Math.random() * 1000) + 1,
        name,
        description,
        duedate 
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// DELETE: eliminar una tarea por id
router.delete('/removeTask/:id', (req, res) => {
    const tasksId = parseInt(req.params.id);
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id_ !== tasksId);

    if (tasks.length === initialLength) {
        return res.status(404).json({ error: `Task con id ${tasksId} no encontrada` });
    }

    res.json({ message: `Task con id ${tasksId} eliminada` });
});

module.exports = router;

