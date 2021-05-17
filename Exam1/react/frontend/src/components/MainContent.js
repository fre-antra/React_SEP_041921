import React, { Component } from "react";

export class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "taylor",
            data: [],
        };
    }

    async fetchData() {
        fetch(
            "https://itunes.apple.com/search?term=" +
                this.state.name +
                "&media=music&entity=album&attribute=artistTerm&limit=500"
        )
            .then((response) => {
                if (response.status !== 200) {
                    console.log(
                        "there was a problem. Status Code: " + response.status
                    );
                    return;
                }
                if (response.resultCount == 0) {
                    console.log("result 0");
                }
                response.json().then((data) => {
                    console.log(data);
                    this.setState({
                        data: data.results,
                    });
                });
            })
            .catch(function (error) {
                console.log("Error:", error);
                this.setState({ error, isLoading: false });
            });
    }

    componentDidMount() {}
    render() {
        const { data } = this.state;
        return (
            <div className="container">
                <div className="cards">
                    {data.map((ele) => {
                        return (
                            <div className="card">
                                <img
                                    className="img"
                                    src={ele.artworkUrl100}
                                    alt=""
                                />
                                <p>{ele.artistName}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default MainContent;
