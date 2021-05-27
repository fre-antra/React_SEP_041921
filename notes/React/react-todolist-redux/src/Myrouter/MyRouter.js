import React from "react";
import { Children } from "react";


const pathMatch = (path, exact) => {
    const locationPath = window.location.pathname;
    if (exact) {
        return locationPath === path;
    }
    return locationPath.includes(path);
}

export class MyRoute extends React.Component {



    render() {
        const { path, children, exact = false, component, render } = this.props;
        console.log(window.location);
        if (pathMatch(path, exact)) {
            if (component) {
                console.log(component);
                //return null;
                return React.createElement(component, {}, null);
            }

            if (render) {
                return React.createElement(render(), {}, null);
                //return render();
            }
            return children;
        }
        return null;

    }
}