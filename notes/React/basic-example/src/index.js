import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Clock extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      timer: new Date().toLocaleTimeString()
    }
  }

  componentDidMount() {
    // this will keep going even unmount compoent
    this.myTime = setInterval(() => {
      this.setState({
        timer: new Date().toLocaleTimeString()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myTime);
  }

  render() {
    return <h1>Clock Timer:{this.state.timer}</h1>;
  }
}


class Content extends React.Component {
  render() {
    const { children } = this.props;
    return <section className="content">{children}</section>
  }
}

class Header extends React.Component {
  render() {

    return <header>Header</header>;
  }
}

// children need pass to the basic level otherwise it will not show.
class Layout extends React.Component {
  constructor(...args) {
    super(...args);
    console.log('Layout constructor');     //4

  }

  static getDerivedStateFromProps(props, state) {
    console.log('Layout getDerivedStateFromProps');        //5  from props to change state
    // For Update 4
    return null;
  }

  componentDidMount() {
    console.log('Layout componentDidMount');       //7
  }

  shouldComponentUpdate(nextProps, nextState) {   // React.pureComponent can save this method
    if (nextProps.content === this.props.content) {
      return false;
    } else {
      return true;
    }
    //console.log('Layout shouldComponentUpdate');    // For Update 5
    //return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('Layout getSnapshotBeforeUpdate');  // For Update 7
  }

  componentDidUpdate() {
    console.log('Layout componentDidUpdate');       // For Update 9
  }

  render() {
    console.log('Layout render');      //6           // For Update 6
    const { children } = this.props;
    return (
      <>
        <Header></Header>
        <Content>{children}</Content>
      </>
    )
  }
}

class DemoApp extends React.Component {
  state = {
    timer: 100,
    showTimer: true,
  };

  constructor(...args) {
    super(...args);
    console.log('DemoApp constructor');     //1         LifeCycle Method
  }

  static getDerivedStateFromProps(props, state) {
    console.log('DemoApp getDerivedStateFromProps');        //2  from props to change state
    // For Update 1
    return null;
  }

  componentDidMount() {
    console.log('DemoApp componentDidMount');       //8
    console.log(document.getElementById('demoApp'));        // after created the DOM, then we can use document.get
  }

  shouldComponentUpdate() {
    console.log('DemoApp shouldComponentUpdate');    // For Update 2
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('DemoApp getSnapshotBeforeUpdate');   // For Update 8
  }

  componentDidUpdate() {
    console.log('DemoApp componentDidUpdate');      // For Update 10
  }

  render() {
    console.log('DemoApp render');              // 3   // For Update 3
    console.log(document.getElementById('demoApp'));        // we can not log this, because only when render finish, we can check it in DidMount
    // only commit phase will change real DOM, it will compare privous virtual DOM vs current virtual DOM, and change the difference to real DOM
    // without using shouldComponentUpdate all the component will check once
    return (
      <div id="demoApp">
        <Layout>
          <button onClick={() => {
            this.setState({
              timer: 200,
            })
          }}>update Timer</button>
          <button onClick={() => {
            this.setState({
              showTimer: false,
            });
          }}>do not show</button>
          {this.state.showTimer ? (
            <Clock timer={this.state.timer}></Clock>
          ) : (
            <h1>Do not show Timer</h1>
          )}


        </Layout>
      </div >
    )
  }
}

//update sequence
//DemoApp getDerivedStateFromProps
//DemoApp shouldComponentUpdate
//DemoApp render
//Layout getDerivedStateFromProps
//Layout shouldComponentUpdate
//Layout render
//Layout getSnapshotBeforeUpdate
//DemoApp getSnapshotBeforeUpdate
//Layout componentDidUpdate
//DemoApp componentDidUpdate

ReactDOM.render(<DemoApp></DemoApp>, document.getElementById('root'));


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
