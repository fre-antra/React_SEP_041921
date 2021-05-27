import { env } from '../env/env';

let baseUrl;
let todoPath;
switch (process.env.REACT_APP_ENV) {
  case 'dev':
    baseUrl = env.dev.baseUrl;
    todoPath = env.dev.todosPath;
    break;
  case 'test':
    baseUrl = env.test.baseUrl;
    todoPath = env.test.todosPath;
    break;
  case 'prod':
    baseUrl = env.prod.baseUrl;
    todoPath = env.prod.todosPath;
    break;
  default:
    baseUrl = env.dev.baseUrl;
    todoPath = env.dev.todosPath;
    break;
}

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
