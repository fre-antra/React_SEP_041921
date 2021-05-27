import React from 'react';
const MyReacReduxContext = React.createContext(null);

export class MyProvider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <MyReacReduxContext.Provider value={store}>
        {this.props.children}
      </MyReacReduxContext.Provider>
    );
  }
}

// export const ReactReduxTest = myconnect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(ReactReduxTester);       myconnect = () => () => component

export const myconnect =
  (mapStateToProps, mapDispatchToProps) => (WrappedComponent) =>
    class NewComponnet extends React.Component {
      static contextType = MyReacReduxContext;        // 需要这个provider才能起作用
      componentDidMount() {
        const { subscribe } = this.context;
        this.unsub = subscribe(() => this.forceUpdate());
      }
      componentWillUnmount() {
        this.unsub();
      }

      render() {
        const { getState, dispatch } = this.context;    // this.context 是上面Line8的store
        const sendStateToPropsObj = mapStateToProps(getState());     // invode getState 并且用返回的state obj作为参数
        // contain property that my component need
        const sendDispatchToPropsObj = mapDispatchToProps(dispatch);    // 这里我们想要pass dispatch function整个过去 让component里面去call
        // this method tell us which props and state we should pass to our component
        return (
          <WrappedComponent
            {...sendStateToPropsObj}      // send all Obj to component
            {...sendDispatchToPropsObj}
            {...this.props}   // 如果有套娃，把之前的Props传过去

          // counter = {getState().value};
          // increment={() => {
          //   dispatch({ type: "counter/incremented" });
          // }}
          // decrement={() => {
          //   dispatch({ type: "counter/decremented" });
          // }}
          ></WrappedComponent>
        );
      }
    };

// export function myconnect() {
//   return () => {
//     return class extends React.Component {
//       static contextType = MyReacReduxContext;
//       render() {
//         console.log(this.context);
//         return <h1>myconnect</h1>;
//       }
//     };
//   };
// }
