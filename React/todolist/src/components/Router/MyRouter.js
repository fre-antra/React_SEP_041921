import React from "react";

let myRouteInstance = [];

function RouteRegister(routeInstance) {
  const handlePopState = () => {
    routeInstance.forceUpdate();
  };
  myRouteInstance.push(routeInstance);
  window.addEventListener("popstate", handlePopState);
  return function unRegister() {
    myRouteInstance = myRouteInstance.filter(
      (instance) => instance !== routeInstance
    );
    window.removeEventListener(handlePopState);
  };
}

const match = (pathFromProps, exact) => {
  const pathFromWebApi = window.location.pathname;
  return exact
    ? pathFromWebApi === pathFromProps
    : pathFromWebApi.includes(pathFromProps);
};
export class MyLink extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", this.props.to);
    myRouteInstance.forEach((instance) => instance.forceUpdate());
  };

  render() {
    const { to, children } = this.props;
    const url = window.location.origin + to;
    return (
      <a href={`${to}`} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}
export class MyRoute extends React.Component {
  componentDidMount() {
      this.unRegister = RouteRegister(this);
  }

  componentWillUnmount() {
      this.unRegister();
  }

  renderContent = () => {
    const { component, render, children } = this.props;
    // donothing with children
    if (children) return children;
    // use React.createElement with component
    else if (component) return React.createElement(component, {}, null);
    // invoke when renderProps
    else if (render) return render();
    else return null;
  };
  render() {
    const { path, exact } = this.props;

    if (match(path, exact)) {
      let content = this.renderContent();
      console.log(content.props);
      return (
        <>
          <h1>Route</h1>
          {content}
        </>
      );
    } else return null;
  }
}
