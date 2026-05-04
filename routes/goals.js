/* eslint-disable no-undef */
var express = require('express');
var router = express.Router();

let goals = [
    {id_: 1, name: 'Goals 1', description: 'Description for goal 1', duedate: '2024-06-30'},
    {id_: 2, name: 'Goals 2', description: 'Description for goal 2', duedate: '2024-07-15'},
    {id_: 3, name: 'Goals 3', description: 'Description for goal 3', duedate: '2024-07-30'},
];

// GET: obtener todas las metas
router.get('/getGoals', (req, res) => {
    res.json(goals);
});

// POST: agregar una nueva meta con validación
router.post('/addGoal', (req, res) => {
    if (!req.body || !req.body.name || !req.body.description || !req.body.duedate) {
        return res.status(400).json({ error: 'Faltan campos en el body' });
    }

    const { name, description, duedate } = req.body;
    const newGoal = {
        id_: Math.floor(Math.random() * 1000) + 1,
        name,
        description,
        duedate 
    };
    goals.push(newGoal);
    res.status(201).json(newGoal);
});

// DELETE: eliminar una meta por id
router.delete('/removeGoal/:id', (req, res) => {
    const goalsId = parseInt(req.params.id);
    const initialLength = goals.length;
    goals = goals.filter(goal => goal.id_ !== goalsId);

    if (goals.length === initialLength) {
        return res.status(404).json({ error: `Goal con id ${goalsId} no encontrada` });
    }

    res.json({ message: `Goal con id ${goalsId} eliminada` });
});

module.exports = router;

