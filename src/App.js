import React from 'react';
import './App.css';
import Game from "./Game";

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <h1>Conway's Game of Life</h1>
        <Game />
      </div>
    );
  }

}

export default App;
