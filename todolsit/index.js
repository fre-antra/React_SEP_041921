const todoAPI = (() => {

    const baseurl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos'

    const getAllTodos = () =>
        fetch([baseurl, todoPath].join('/'))
            .then((response) => response.json());

    const deleteTodo = (id) => 
        fetch([baseurl, todoPath, id].join('/'), {
            method: 'DELETE',
        });

    const addTodo = newtodo => 
        fetch([baseurl, todoPath].join('/'), {
            method: 'POST',
            body: JSON.stringify(newtodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json());

    return {
        getAllTodos,
        deleteTodo,
        addTodo
    }
})();

const View = (() => {
    const domString = {
        todolist: 'todlist-content',
        removeBtn: 'btn-remove',
        todoinput: 'todolist__input'
    }
    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createTodoTmp = (todoArray) => {
        let htmlString = '';
        todoArray.forEach(ele => {
            htmlString += `
                <li>
                    <span>${ele.title}</span>
                    <button 
                        class="btn-remove"
                        id="${ele.id}"
                    >
                        X
                    </button>
                </li>
            `;
        });
        return htmlString;
    }

    return {
        domString,
        render,
        createTodoTmp
    }
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
        #todolist = [];
        #inputval = '';

        get inputval() {
            return this.#inputval;
        }
        set inputval(value) {
            this.#inputval = value;
        }
        
        get todolist() {
            return this.#todolist;
        }
        set todolist(newlist) {
            this.#todolist = newlist;

            const todoelement = document.querySelector('#' + view.domString.todolist);
            const htmlString = view.createTodoTmp(this.#todolist);
            view.render(todoelement, htmlString);
        }
    }

    const getAllTodos = api.getAllTodos;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;

    return {
        Todo,
        State,
        getAllTodos,
        deleteTodo,
        addTodo
    }
})(todoAPI, View);

const AppController = ((view, model) => {

    const state = new model.State();

    const addTodoToList = () => {
        const todoInputEle = document.querySelector('.' + view.domString.todoinput);
        todoInputEle.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                state.inputval = event.target.value;

                const newtodo = new model.Todo(state.inputval);
                model.addTodo(newtodo).then(data => {
                    console.log(data);
                    state.todolist = [data, ...state.todolist];
                });
                event.target.value = '';
            }
        });
    }

    const removeTodoFromList = () => {
        const todoElement = document.querySelector('#' + view.domString.todolist);
        todoElement.addEventListener('click', event => {
            state.todolist = state.todolist.filter(todo => +todo.id !== +event.target.id);
            model.deleteTodo(+event.target.id);
        });
    }

    const init = () => {
        model.getAllTodos().then(data => {
            state.todolist = data;
            removeTodoFromList();
            addTodoToList();
        });
    }
    
    return {
        init
    }
})(View, Model);

AppController.init();

