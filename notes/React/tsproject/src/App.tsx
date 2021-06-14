import React from 'react';
import Button , {ButtonSize} from './components/Button/Button'

// npm install node-sass
function App() {
  return (
    <div className="App">
      <h1> Welcome blablabla</h1>
      <Button>Default Button</Button>

      <h2>Diff Size</h2>
      <Button btnSize={ButtonSize.Large}>Large Button</Button>
      <Button >Default Button</Button>
      <Button btnSize={ButtonSize.Small}>Small Button</Button>

    </div>
  );
}

export default App;
