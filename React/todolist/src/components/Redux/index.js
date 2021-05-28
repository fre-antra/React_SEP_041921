import React from "react";
import { MyContext } from "./MyProvider";

export const myconnect = (mSTP, mDTP) => (WrappedComponent) => {
  return class extends React.Component {
    static contextType = MyContext;
    state={
        rate: 12
    }
    componentDidMount() {
      const { subscribe } = this.context;
      subscribe(() => this.forceUpdate());
    }

    render() {
      const { getState, dispatch } = this.context;
      const objectReturnFromMapStateToProps = mSTP(getState());
      const objectReturnFromMapDispatchToProps = mDTP(dispatch);

      console.log('from component in my connect', this.props);
      
      return (
        <>
          <h1>Extra Component from My connect</h1>
          <h2>Counter: {getState().counter}</h2>
          <WrappedComponent
            {...objectReturnFromMapStateToProps}
            {...objectReturnFromMapDispatchToProps}
            {...this.props}
            {...this.state}
          ></WrappedComponent>
        </>
      );
    }
  };
};
