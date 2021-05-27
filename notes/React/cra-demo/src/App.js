import React from 'react';

let data = { name: 'patrick' };
class App extends React.Component {
  // state = {
  //   data: { name: 'patrick' },
  // };

  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      data: { name: 'patrick', counter: 0 },
    };
    // this.handleClick = this.handleClick.bind(this);     // this also work
  }

  // the object create when you invoke, that's why is same result
  handleClick() {
    this.setState({
      data: { name: 'Sam', counter: this.state.data.counter + 1 },
    });
    this.setState({
      data: { name: 'Sam', counter: this.state.data.counter + 1 },
    });
  };


  // below add 2 not only 1
  // this callback like
  // state = newState(state);      invoke the callback function 
  // we do not directly generate the new object, but we invoke the function

  // 把callback单写就更明了了 
  // setState((preState) => {
  //   return {
  //     counter: preState.counter + 1,
  //   };
  // });


handleClick() {
  this.setState((prevState) => {
    return {
      data: { name: 'Sam', counter: prevState.data.counter + 1 },
    };
  });
  this.setState((prevState) => {
    return {
      data: { name: 'Sam', counter: prevState.data.counter + 1 },
    };
  });
  // handleClick = () => {      instance for constructor
  //   this.setState({
  //     data: { name: 'Sam' },
  //   });
  // };


  // react help us do one way data binding from js to view
  //onclick function inside it
  // when handleClick triger, it triger by eventlistener not whole function
  // arrow function can help bind it
  // arrow help us bind this , when you declear it


  // line 48  this keyword bind to render scope , render is compoent.render 
  render() {
    return (
      <>
        <h1>
          Hello {this.state.data.name} {this.state.data.counter}
        </h1>
        <button onClick={() => this.handleClick()}>Change State</button>
        <button
          onClick={() => {
            console.log(data);
            data = { name: 'Sam2' };
            console.log(data);
          }}
        >
          Change State
        </button>
      </>
    );
  }
}

export default App;
