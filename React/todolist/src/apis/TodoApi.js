const baseUrl = 'https://jsonplaceholder.typicode.com';
const todoPath = 'todos';

export const getAllTodos = () =>
  fetch([baseUrl, todoPath].join('/')).then((res) => res.json());

export const addTodo = (newTodo) =>
  fetch([baseUrl, todoPath].join('/'), {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json());

export const deleteTodo = (id) =>
  fetch([baseUrl, todoPath, id].join('/'), {
    method: 'DELETE',
  }).then((res) => res.json());
