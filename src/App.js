import React, { Component } from 'react';
import './App.css';
import Mask from '../src/pages/Mask';

class App extends Component {
  state = { showMask: false };

  buttonMask = () => {
    const doesShow = this.state.showMask;
    this.setState({ showMask: !doesShow })
  };

  render(){
    let mask = null;

    if (this.state.showMask) {
      mask = (
        <div>
          <Mask  />
        </div>
      )
    };


    return (
      <div className="App">
        <button onClick={this.buttonMask} >Show Mask</button>
        {mask}
      </div>
    );
  }
}

export default App;
