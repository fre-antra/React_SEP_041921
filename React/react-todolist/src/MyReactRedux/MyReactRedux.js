import React from 'react';

export const MyReduxContext = React.createContext(null);

export class Provider extends React.Component {
  render() {
    const { children, store } = this.props;

    return (
      <MyReduxContext.Provider value={store}>
        {children}
      </MyReduxContext.Provider>
    );
  }
}

// const mapDispatchToProps = (dispatch /*, ownProps*/) => {
//     return {
//       increment: () => dispatch(actionCreater.increment()),
//     };
//   };

// const mapStateToProps = (state /*, ownProps*/) => {
//     return {
//       counter: state.counter,
//       title: state.title,
//       hello: state.hello,
//     };
//   };

//export default connect(mapStateToProps, null)(ReduxCounterApp);

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return (WrappedComponent) => {
    return class NewComponent extends React.Component {
      constructor(props, context) {
        super(props, context);
        this.state = this.getPropsToConnectComponent();
      }
      static contextType = MyReduxContext;
      getPropsToConnectComponent = () => {
        const { getState, dispatch } = this.context;
        const stateToProps = mapStateToProps(getState());

        const dispatchToProps = mapDispatchToProps(dispatch);

        return { ...stateToProps, ...dispatchToProps };
      };
      render() {
        console.log(this.context);
        return (
          <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
        );
      }

      componentDidMount() {
        const { subscribe } = this.context;
        this.unsubscribe = subscribe(() => {
          console.log('subscribe from connect');
          this.setState(this.getPropsToConnectComponent());
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }
    };
  };
};
