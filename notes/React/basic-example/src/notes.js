import React from 'react';
import ReactDOM from 'react-dom';



class Clock extends React.Component {

    render() {
        const {timer} = this.props;
        return <h1>Clock</h1>;
    }
}

class Content extends React.Component {
    render() {
        const { children } = this.props;
        return <section className="content">{children}</section>
    }
}

class Header extends React.Component {
    render() {

        return <header>Header</header>;
    }
}

// children need pass to the basic level otherwise it will not show.
class Layout extends React.Component {
    constructor(...args) {
        super(...args);
        console.log('Layout constructor');     //4

    }

    static getDerivedStateFromProps(props, state) {
        console.log('Layout getDerivedStateFromProps');        //5  from props to change state
        return null;
    }

    componentDidMount() {
        console.log('Layout componentDidMount');       //7
    }

    render() {
        console.log('Layout render');      //6
        const { children } = this.props;
        return (
            <>
                <Header></Header>
                <Content>{children}</Content>
            </>
        )
    }
}

class DemoApp extends React.Component {
    state = {
        time: 100,
    }

    constructor(...args) {
        super(...args);
        console.log('DemoApp constructor');     //1         LifeCycle Method
    }

    static getDerivedStateFromProps(props, state) {
        console.log('DemoApp getDerivedStateFromProps');        //2  from props to change state
        return null;
    }

    componentDidMount() {
        console.log('DemoApp componentDidMount');       //8
        console.log(document.getElementById('demoApp'));        // after created the DOM, then we can use document.get
    }


    render() {
        console.log('DemoApp render');              // 3
        console.log(document.getElementById('demoApp'));        // we can not log this, because only when render finish, we can check it in DidMount
        return (
            <div id="demoApp">
                <Layout>
                    <button onClick={() => {
                        this.setState({
                            timer: 200,
                        })
                    }}>update Timer</button>
                    <Clock timer={this.state.timer}></Clock>
                </Layout>
            </div>
        )
    }
}

ReactDOM.render(<DemoApp></DemoApp>, document.getElementById('root'));