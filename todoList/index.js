// this IFEE return an object that has getAllTodos function
// getAllTodos is a function that console log the value you get from fetching
const todoAPI = (() => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const todoPath = "todos";

  const getAllTodos = () =>
    fetch([baseUrl, todoPath].join("/")).then((response) => response.json());

  const deleteTodo = (id) =>
    fetch([baseUrl, todoPath, id].join("/"), {
      method: "DELETE",
    });

  const addTodo = (newTodo) =>
    fetch([baseUrl, todoPath].join("/"), {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

  return { getAllTodos, deleteTodo, addTodo };
})();

const View = (() => {
  const domString = {
    todolist: "todolist-content",
    removeBtn: "btn-remove",
    todoinput: "todolist__input",
  };

  // the render take 2 things: an elment and value
  //write the .innerHTML of that element to that value
  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  const createTodoTmp = (todoArray) => {
    let htmlString = "";
    todoArray.forEach((ele) => {
      htmlString += `
            <li>
            <span>${ele.title}</span>
            <button 
                class="btn-remove" 
                id="${ele.id}">
                X
            </button>
          </li>
            `;
    });
    return htmlString;
  };

  return {
    domString,
    render,
    createTodoTmp,
  };
})();

const Model = ((api, view) => {
  class Todo {
    constructor(title) {
      this.userId = 1;

      this.title = title;
      this.completed = false;
    }
  }

  class State {
    //  Put # infront of variable to become private
    // We rerender everytime this state is changing
    #todolist = [];
    #inputvalue = "";

    get todolist() {
      return this.#todolist;
    }

    set todolist(newTodos) {
      this.#todolist = newTodos;

      //  rerender
      const todoElement = document.querySelector("#" + view.domString.todolist);
      const htmlString = view.createTodoTmp(this.#todolist);
      view.render(todoElement, htmlString);
    }

    get inputvalue() {
      return this.#inputvalue;
    }

    set inputvalue(newInput) {
      this.#inputvalue = newInput;
    }
  }

  // why u pass a function
  const getAllTodos = api.getAllTodos;
  const deleteTodo = api.deleteTodo;
  const addTodo = api.addTodo;

  return {
    Todo,
    getAllTodos,
    deleteTodo,
    addTodo,
    State,
  };
})(todoAPI, View);

const AppController = ((view, model) => {
  let state = new model.State();

  const addTodoToList = () => {
    const todoInputEle = document.querySelector("." + view.domString.todoinput);
    todoInputEle.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        state.inputvalue = event.target.value;

        const newtodo = new Model.Todo(state.inputvalue);
        model.addTodo(newtodo).then((data) => {
          console.log(data);
          state.todolist = [data, ...state.todolist];
        });

        event.target.value = '';
      }
    });
  };

  const removeTodoFromList = () => {
    const todoElement = document.querySelector("#" + view.domString.todolist);

    todoElement.addEventListener("click", (event) => {
      state.todolist = state.todolist.filter(
        (todo) => todo.id !== event.target.id
      );
      //  model.deleteTodo(event.target.id);
    });
  };

  //   init is where all data come together
  const init = () => {
    model.getAllTodos().then((data) => {
      state.todolist = data;
      removeTodoFromList();
      addTodoToList();
    });
  };

  return {
    init,
  };
})(View, Model);

AppController.init();
