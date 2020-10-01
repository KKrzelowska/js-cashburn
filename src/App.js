import React, { Component } from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
   render(){
      return(
         <div>
            <h1>Witaj jeżu</h1>
	    <button onClick={this.increment.bind(this)}>+</button>
            <output>{this.state.counter}</output>
            <button>-</button>
         </div>
      );
   }
}
export default App;

