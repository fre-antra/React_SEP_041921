import React from 'react';
import { getAllTodos, deleteTodo, addTodo } from '../../apis/TodoAPI';

class WithTodosData extends React.Component {
  state = {
    title: 'TodoData',
    todolist: [],   //这个需要global state data 
  };
  HandleAddTodo = (newTodo) => {
    addTodo(newTodo).then((data) => {
      this.setState({
        todolist: [data, ...this.state.todolist],
      });
    });
  };

  handleRemoveTodo = (id) => {
    deleteTodo(id)
      .then((data) => {
        this.setState({
          todolist: this.state.todolist.filter((todo) => todo.id !== id),
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  componentDidMount() {
    getAllTodos().then((data) => {
      this.setState({
        todolist: data,
      });
    });
  }

  render() {    //返回上面的function
    let header = null;
    let content = null;
    const { render, children, renderHeader } = this.props;      // conditional render
    if (renderHeader) {
      header = renderHeader(this.state.title);
    }

    if (render) {
      content = render(
        this.handleRemoveTodo,
        this.HandleAddTodo,
        this.state.todolist
      );
    } else if (children) {      //children is function
      content = children(     // 给children传这几个function进去
        this.handleRemoveTodo,
        this.HandleAddTodo,
        this.state.todolist
      );
    }

    // render props    give more control with relate data
    
    return (//这块是实验的，返回的header只是说明，然后交给app再传到layout
      <>
        {header}      
        {content}
      </>
    );
  }
}

export default WithTodosData;
