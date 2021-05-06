import {Route} from "react-router-dom";
import Nav from '../src/pages/Nav'
import Counter from '../src/pages/Counter'
import React, { useState } from 'react';
import CardContrainer from '../src/pages/CardContrainer'


function App() {
  const [count, setCount] = useState();
  const [results, setResults] = useState();
  const [artist, setArtist] = useState();

  return (
    <div className="App">
      <Route path='/'
       component={() => <Nav setCount={setCount} setResults={setResults} setArtist={setArtist}/>}
       />
      <Route path="/" component={() => <Counter count={count} artist={artist}/>} />
      <Route path="/CardContrainer" component={() => <CardContrainer results={results} />} />
      
    </div>
  );
}

export default App;
