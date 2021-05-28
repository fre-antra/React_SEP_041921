import React from "react";

export const MyContext = React.createContext(null);

class MyProvider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <>
        <MyContext.Provider value={store}>
          <h1>Extra Compoennt from MyProvider</h1>
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}



export default MyProvider;
