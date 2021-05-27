import React, { useEffect, useState, useRef } from 'react';

function fetchCounterData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(100);
    }, 2000);
  });
}

function NewCounter() {
  const [counter] = useCounter();

  return <h1>Count: {counter}</h1>;
}
export const NewCounterApp = NewCounter;

function useCounter(initialCounterState = 0, initialLoading = false) {
  const [counter, setCounter] = useState(initialCounterState);
  const [isLoading, setIsLoading] = useState(initialLoading);
  const counterRef = useRef(counter);
  counterRef.current = counter;
  useEffect(() => {
    // console.log('useEffect for mount');
    setIsLoading(true);
    fetchCounterData()
      .then((data) => {
        setIsLoading(false);
        setCounter(data);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);
  return [counter, setCounter, isLoading, counterRef];
}

function HooksAppp() {
  //   const result = useState(0);
  //   const counter = result[0];
  //   const setCounter = result[1];
  //   const [counter, setCounter] = useState(0);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const mountRef = useRef(false);

  //   const [counterObj, setCounterObj] = useState({
  //     counter: 0,
  //     isLoading: false,
  //   });

  //   console.log('counter', counter);
  //   let counterRef = useRef(counter);
  //   counterRef.current = counter;
  //   console.log('ref', counterRef);

  // didMount | didUpdate
  //   useEffect(() => {
  //     // console.log('useEffect for mount');
  //     setIsLoading(true);
  //     fetchCounterData()
  //       .then((data) => {
  //         setIsLoading(false);
  //         setCounter(data);
  //       })
  //       .catch((err) => {
  //         setIsLoading(false);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     if (mountRef.current) {
  //       console.log('useEffect for update');
  //     } else {
  //       mountRef.current = true;
  //     }
  //   });

  const [counter, setCounter, isLoading, counterRef] = useCounter(0, false);
  return (
    <section className="hooksApp">
      <h1>HooksApp</h1>
      {isLoading ? <h5>isLoading...</h5> : <h5>Counter: {counter}</h5>}

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add One
      </button>
      <button
        onClick={() => {
          setTimeout(() => {
            alert(counterRef.current);
          }, 3000);
        }}
      >
        aletOne in 3S
      </button>
    </section>
  );
}

function HooksAppTest(props) {
  const { isLoading, counter, handleAdd, counterRef } = props;
  return (
    <section className="classApp">
      <h1>ClassApp</h1>
      {isLoading ? <h5>isLoading...</h5> : <h5>Counter: {counter}</h5>}

      <button onClick={handleAdd}>Add One</button>
      <button
        onClick={() => {
          //const clickState = counter;
          setTimeout(() => {
            alert(counterRef.current);
          }, 3000);
        }}
      >
        aletOne in 3S
      </button>
    </section>
  );
}

const withCounter = (WrappedComponenet) =>
  class NewComponent extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        isLoading: false,
        counter: 0,
      };
      this.counterRef = {
        current: 0,
      };
    }

    handleAdd = () => {
      this.setState({
        counter: this.state.counter + 1,
      });

      this.counterRef.current = this.state.counter + 1;
    };

    render() {
      return (
        <WrappedComponenet
          {...this.props}
          {...this.state}
          counterRef={this.counterRef}
          handleAdd={this.handleAdd}
        ></WrappedComponenet>
      );
    }

    componentDidMount() {
      // console.log(document.querySelector('section.classApp'));
      this.setState({
        isLoading: true,
      });
      fetchCounterData()
        .then((data) => {
          this.setState({
            counter: data,
            isLoading: false,
          });
        })
        .catch((err) => {
          this.setState({
            isLoading: false,
          });
        });
    }
  };
class ClassAppp extends React.Component {
  //   state = {
  //     counter: 0,
  //     isLoading: false,
  //   };

  render() {
    const { isLoading, counter, handleAdd, counterRef } = this.props;

    return (
      <section className="classApp">
        <h1>ClassApp</h1>
        {isLoading ? <h5>isLoading...</h5> : <h5>Counter: {counter}</h5>}

        <button onClick={handleAdd}>Add One</button>
        <button
          onClick={() => {
            //const clickState = counter;
            setTimeout(() => {
              alert(counterRef.current);
            }, 3000);
          }}
        >
          aletOne in 3S
        </button>
      </section>
    );
  }
  //   componentDidMount() {
  //     // console.log(document.querySelector('section.classApp'));
  //     this.setState({
  //       isLoading: true,
  //     });
  //     fetchCounterData()
  //       .then((data) => {
  //         // console.log(data);
  //         this.setState({
  //           counter: data,
  //           isLoading: false,
  //         });
  //       })
  //       .catch((err) => {
  //         this.setState({
  //           isLoading: false,
  //         });
  //       });
  //   }
}

export const ClassApp = withCounter(ClassAppp);
//export const HooksApp = withCounter(HooksAppTest);
export const HooksApp = HooksAppp;
