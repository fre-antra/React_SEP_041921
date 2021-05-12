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
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      data: { name: 'Sam', counter: this.state.data.counter + 1 },
    });
    this.setState({
      data: { name: 'Sam', counter: this.state.data.counter + 1 },
    });
  }

  // handleClick = () => {
  //   this.setState({
  //     data: { name: 'Sam' },
  //   });
  // };

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
