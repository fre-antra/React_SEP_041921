import React, { Component } from "react";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };

        this.onInputchange = this.onInputchange.bind(this);
    }
    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    render() {
        return (
            <div class="topnav">
                <a class="active" href="#home">
                    Home
                </a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>

                <input
                    name="inputTxt"
                    type="text"
                    value={this.state.text}
                    onChange={this.onInputchange}
                />
                <button type="button" onClick={this.fetchData}>
                    <i class="fa fa-search"></i>
                </button>
            </div>
        );
    }
}
