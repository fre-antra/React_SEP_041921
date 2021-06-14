const express = require('express');
const cors = require('cors');
const app = express();
const port = 3500;
const {
  getTodosFromDB,
  addTodoFromDB,
  removeTodoFromDB,
} = require('./db/todos.db.js');

app.use((req, res, next) => {     // midwhere
  console.log('waiting');
  next();
});

app.use(cors());

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//   res.header('Access-Control-Allow-Headers', '*');
//   next();
// });

app.use(express.json());      // it will test the middleware if it is json format , it will parse the body , then trigger next

app.get('/', (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = req.path;
  const query = req.query;
  const headers = req.headers;
  console.log('Request is coming');
  res.json({ server: 'Express', method, url, path, query, headers });
});

app.get('/api/todos', (req, res) => {
  getTodosFromDB().then((todos) => {    // 因为db asyn 所以用这个，todos == function return data
    res.json(todos);
  });
  // res.json({ test: 'test' });
});

app.post('/api/todos', (req, res) => {
  const newTodo = req.body;
  addTodoFromDB(newTodo).then((newTodo) => {
    res.json(newTodo);
  });
});

app.delete('/api/todos/:id', (req, res) => {
  const id = +req.params.id;        // convert to int
  removeTodoFromDB(id).then((newTodo) => {
    res.json(newTodo);
  });
});

app.use((req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.write('Can not get');
  res.end();
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
