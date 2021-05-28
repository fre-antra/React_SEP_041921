import React, { useEffect, useState, useRef, useReducer } from "react";

//let globalCounter;


export const Hook = () => {
  let [counter, setCounter] = useState(0);
  const counterRef = useRef(counter);
  console.log(counterRef);
//  globalCounter = counter;
  useEffect(() => {
    const el = document.querySelector(".fh");
  });

  return (
    <div>
      <section className="fh">Functional Hook: {counter}</section>
      <section className="fh">Functional Hook: {counterRef.value}</section>
      <button
        onClick={() => {
          setCounter(counter + 1);
        //  globalCounter = counter;
        }}
      >
        Increase
      </button>
      <button
        onClick={() =>
          setTimeout(() => {
            console.log(counter);
          }, 2000)
        }
      >
        Log TIme out
      </button>
    </div>
  );
};

export class Hook2 extends React.Component {
  state = {
    counter: 0,
  };
  componentDidMount() {
    const el = document.querySelector(".ch");
    console.log(el);
  }
  render() {
    return (
      <div>
        <section className="ch">Class Hook: {this.state.counter}</section>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase
        </button>
        <button
          onClick={() =>
            setTimeout(() => {
              console.log(this.state.counter);
            }, 2000)
          }
        >
          Log TIme out
        </button>
      </div>
    );
  }
}

export const Hook3 = () => {
  return (
    <div>
      <Hook></Hook>
      <Hook2></Hook2>
    </div>
  );
};
