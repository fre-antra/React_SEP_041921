import React,{Component} from 'react';
import './App.css';

//COMPONENTS
import NavBar from './components/app_nav/NavBar';
import SearchForm from './components/forms/search_form/SearchForm';
import List from './components//list/list'
//import Footer from './components/app_footer/footer';



class App extends Component {
  constructor(){
    super();
    this.state = {
      landing: true,
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <main>
          <SearchForm />
          {this.state.landing && <p>Search Albums by Artist Name</p>}
          <List />
        </main>
      </div>
    )
  }
  
}

export default App;
