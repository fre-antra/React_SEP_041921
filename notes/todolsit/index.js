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

const View = (() => {                   // dom manipulation
    const domString = {                 // 存一下名字好用
        todolist: 'todolist-content',
        removeBtn: 'btn-remove',
        todoinput: 'todolist__input'
    }
    const render = (element, htmlString) => {       // 渲染模块的时候
        element.innerHTML = htmlString;
    }

    const createTodoTmp = (todoArray) => {          // 文本string然后扔给渲染
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
    class Todo {                        // 建立新的小表格的时候
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
        set todolist(newlist) {             // 每次set todolist都重新渲染一遍
            this.#todolist = newlist;

            const todoelement = document.querySelector('#' + view.domString.todolist);
            const htmlString = view.createTodoTmp(this.#todolist);
            view.render(todoelement, htmlString);
        }
    }

    const getAllTodos = api.getAllTodos;            //simple involve api
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
                    state.todolist = [data, ...state.todolist];     // 在前面添加新的
                });
                event.target.value = '';            // 清空
            }
        });
    }

    const removeTodoFromList = () => {
        const todoElement = document.querySelector('#' + view.domString.todolist);
        todoElement.addEventListener('click', event => {
            state.todolist = state.todolist.filter(todo => +todo.id !== +event.target.id);  // 左边set  右边get 
            model.deleteTodo(+event.target.id);
        });
    }

    const init = () => {
        model.getAllTodos().then(data => {
            state.todolist = data;          //set 会运行
            removeTodoFromList();
            addTodoToList();
        });
    }
    
    return {
        init
    }
})(View, Model);

AppController.init();
