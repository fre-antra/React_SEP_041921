import React from 'react';
import Nav from './Nav';
import SongList from './SongList';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      search: ''
    }
  }

  setList(newList) {
    this.setState({list: newList})
  }

  setSearch(newSearch) {
    this.setState({search: newSearch})
  }

  render() {
    return <>
      <Nav setList={this.setList.bind(this)} setSearch={this.setSearch.bind(this)}/>
      <SongList list={this.state.list} text={this.state.search}/>
    </>
  }
}

export default App;
