// State
// event bubbleing vs event capturing
// event delegation

const postsAPIs = (() => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const postsPath = 'posts';

  const getAllPosts = () =>
    fetch([baseUrl, postsPath].join('/')).then((res) => res.json());

  return {
    getAllPosts,
  };
})();
const todoAPIs = (() => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const todoPath = 'todos';

  const getAllTodos = () =>
    fetch([baseUrl, todoPath].join('/')).then((res) => res.json());
  const addTodo = (newTodo) =>
    fetch([baseUrl, todoPath].join('/'), {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json());

  const deleteTodo = (id) =>
    fetch([baseUrl, todoPath, id].join('/'), {
      method: 'DELETE',
    }).then((res) => res.json());

  return {
    getAllTodos,
    deleteTodo,
    addTodo,
  };
})();

const View = (() => {
  const domString = {
    todolist: '.todolist__content',
    todolistInput: '.todolist__input',
  };
  const renderInnerHTML = (htmlTemplate, element) => {
    element.innerHTML = htmlTemplate;
  };

  const generateTodoListTmp = function (todoArr) {
    let todoListTmp = '';
    todoArr.forEach((todo) => {
      todoListTmp += `<li class="todolist__content-item"><span>${todo.title}</span> <button id="${todo.id}" class="btn-remove">X</button></li>`;
    });

    return todoListTmp;
  };
  return {
    domString,
    generateTodoListTmp,
    renderInnerHTML,
  };
})();

const Model = ((api) => {
  class Todo {
    constructor(userId, id, title, completed) {
      this.userId = userId;
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
  }

  const fetchTodos = api.getAllTodos;
  const deleteTodo = api.deleteTodo;
  const addTodo = api.addTodo;

  return {
    fetchTodos,
    deleteTodo,
    addTodo,
    Todo,
  };
})(todoAPIs);

const AppController = ((view, model) => {
  // MVVM
  // data binding
  // model => view :  set Method + dom changes
  // view => model : event binding
  class State {
    constructor() {
      this._todolist = [];
      this._todolistInput = '';
    }
    get todolistInput() {
      return this._todolistInput;
    }
    set todolistInput(newValue) {
      this._todolistInput = newValue;
      // find the element
      const todolistInput = document.querySelector(
        view.domString.todolistInput
      );
      todolistInput.value = this._todolistInput;
    }

    get todolist() {
      return this._todolist;
    }

    set todolist(newList) {
      this._todolist = newList;

      // rerender
      // generate template
      const tmp = view.generateTodoListTmp(this._todolist);
      // find the element
      const todoListElement = document.querySelector(view.domString.todolist);
      // render
      view.renderInnerHTML(tmp, todoListElement);

      // event bubbling
      // const btnRemoves = document.querySelectorAll('.btn-remove');
      // btnRemoves.forEach((node) => {
      //   node.addEventListener('click', () => {
      //     // remove the todo based on id
      //     console.log(node.id);
      //     model.deleteTodo(node.id).then(() => {
      //       console.log('remove');
      //       state.todolist = state.todolist.filter(
      //         (todo) => +todo.id !== +node.id
      //       );
      //       console.log(state.todolist);
      //     });
      //   });
      // });
    }
  }

  const state = new State();

  const addTodoListInputEvent = () => {
    const todolistInput = document.querySelector(view.domString.todolistInput);
    todolistInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const newTodo = new model.Todo(1, null, state.todolistInput, false);
        model.addTodo(newTodo).then((data) => {
          console.log(data);
          state.todolist = [data, ...state.todolist];
        });
        state.todolistInput = '';
      }

      state.todolistInput = e.target.value;
      console.log(state);
    });
  };

  const addTodoListClickEvent = () => {
    const todolistContent = document.querySelector(view.domString.todolist);
    todolistContent.addEventListener('click', (event) => {
      if (event.target.className === 'btn-remove') {
        model.deleteTodo(event.target.id).then(() => {
          console.log('remove');
          state.todolist = state.todolist.filter(
            (todo) => +todo.id !== +event.target.id
          );
        });
      }
    });
  };

  const initTodoList = () => {
    // setup event
    addTodoListInputEvent();

    // fetch Data
    model.fetchTodos().then((data) => {
      // update the state
      state.todolist = data;
      // addEventListener
      addTodoListClickEvent();
    });
  };

  const init = () => {
    console.log('init');
    initTodoList();
  };
  return {
    init,
  };
})(View, Model);

document.addEventListener('DOMContentLoaded', function () {
  AppController.init();
});
