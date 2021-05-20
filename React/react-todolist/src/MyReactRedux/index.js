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
//   )(ReactReduxTester);
export const myconnect =
  (mapStateToProps, mapDispatchToProps) => (WrappedComponent) =>
    class NewComponnet extends React.Component {
      static contextType = MyReacReduxContext;
      componentDidMount() {
        const { subscribe } = this.context;
        this.unsub = subscribe(() => this.forceUpdate());
      }
      componentWillUnmount() {
        this.unsub();
      }

      render() {
        const { getState, dispatch } = this.context;
        const sendStateToPropsObj = mapStateToProps(getState());
        const sendDispatchToPropsObj = mapDispatchToProps(dispatch);

        return (
          <WrappedComponent
            {...sendStateToPropsObj}
            {...sendDispatchToPropsObj}
            {...this.props}
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
