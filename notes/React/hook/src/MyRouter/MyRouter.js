import React from 'react';

const MyRouteInstances = [];

function routerRegister(routeInstance) {
  MyRouteInstances.push(routeInstance);

  const hanldePopstate = () => {    //用来取消popstate event
    routeInstance.forceUpdate();
  };
  window.addEventListener('popstate', hanldePopstate);    // 后退键 
  return function unRegister() {
    MyRouteInstances = MyRouteInstances.filter(
      (instance) => instance !== routeInstance
    );
    window.removeEventListener(hanldePopstate);
  };
}

const pathMatch = (path, exact) => {
  const locationPath = window.location.pathname;
  if (exact) {
    return locationPath === path;
  }
  return locationPath.includes(path);
};

export class MyRoute extends React.Component {
  render() {
    const { path, children, exact = false, component, render } = this.props;
    if (pathMatch(path, exact)) {
      if (component) {
        return React.createElement(component, {}, null);
      }
      if (render) {   //it already return JSX dont need use React.createElement again
        return render();
      }
      if (children) {
        return children;
      }
    }

    return null;
  }

  componentWillUnmount() {
    console.log('unmount');
    this.unRegister();
  }

  componentDidMount() {
    this.unRegister = routerRegister(this);
  }
}

export class MyLink extends React.Component {
  handleClicked = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', this.props.to);
    MyRouteInstances.forEach((instance) => {
      instance.forceUpdate();
    });
  };

  render() {
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.handleClicked}>
        {children}
      </a>
    );
  }
}
