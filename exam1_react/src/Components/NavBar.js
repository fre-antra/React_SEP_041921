import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      //call the API search
      this.handleSearch();
    }
    else {
      //user is just typing
      this.setState({ searchValue: e.target.value });
    }
  };

  handleSearch = () => {
    this.props.searchArtist(this.state.searchValue);
  };

  render() {
    return (
      <header>
        <nav className="nav">
          <div className="nav__item">
            <div className="nav__item--label">
              <input
                id="searchBar"
                className="nav__item--search"
                type="text"
                placeholder="Search..."
                value={this.state.value}
                onKeyUp={this.handleChange}
              />
              <button id="magnifying_class_btn" className="magnifying_class_btn" onClick={this.handleSearch}>
                <img alt="Search" src="/img/loupe.png" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
