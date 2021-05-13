import React  from 'react';

let data = {name: 'patrick'};

class App extends React.Component {
  state = {  data: {name: 'patrick'}}
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     data:[{name: 'patrick'}]
  //   }
  // }

  render(){
    return <>
            <h1>Hello {this.state.data.name} {data.name}</h1>
            <button onClick ={() => {
              this.setState({data:{name:'Sam'}
              });
              }}>
                change click
            </button>
            <button 
              onClick ={ () => {
                data = {name:'Sam2'}
                console.log(data);
              }}
              >
                change click
            </button>
          
          </>
  }
}

export default App;
