import React from "react";
import { getAllTodos, deleteTodo, addTodo } from "../../apis/TodoApi";

export const withTodos = (WrappedComponent) => {
  return class newComponent extends React.Component {
    state = {
        todoData: []
    }

    componentDidMount() {
        getAllTodos().then((data) => {
            this.setState({
                todoData: data
            })
          });
    }

    addState = (newTodo) => {
        addTodo(newTodo).then((data) => {
            this.setState({
                todoData : [data, ...this.state.todoData]
            })
        })
    }

    removeState = (id) => {
        deleteTodo(id)
            .then(data => {
                this.setState({
                    todoData: this.state.todoData.filter(todo => todo.id !== id)
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        
      return (
        <div>
          <h2>Wrpaawede</h2>
          <WrappedComponent 
            todoData={this.state.todoData}
            handleRemoveState={this.removeState}
            handleAddState={this.addState}
            >

            </WrappedComponent>
        </div>
      );
    }
  };
};
