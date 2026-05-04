const express = require('express');
const tasksRouter = require('./routes/tasks'); // ruta correcta

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente');
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
