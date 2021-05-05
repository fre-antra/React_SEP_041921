import logo from './logo.svg';
import NavBar from "./Components/NavBar";

import React, { Component } from 'react';
import SearchResult from "./Components/SearchResult";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumCount: 0,
      albumList: [],
      artistName: ""
    };
    this.searchArtist = this.searchArtist.bind(this);
  }

  searchArtist(artistName) {
    try {
      fetch(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`)
        .then(response => response.json())
        .then(result => {
          this.setState({
            albumCount: result.resultCount,
            albumList: result.results,
            artistName: artistName
          });
        });
    }
    catch (error) {
      console.log(error);
    }

  }
  render() {
    let { artistName, albumList, albumCount } = this.state;
    return (
      <div className="App">
        <NavBar searchArtist={this.searchArtist} />
        <SearchResult artistName={artistName} albumList={albumList} albumCount={albumCount} />
      </div>
    );
  }
}

