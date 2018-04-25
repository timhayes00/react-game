import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Array from './Array'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Archer themed memory guessing game</h1>
        </header>
        {this.state.array.map((item, index) => {
          return (
            <div>
              <img src = {item} />
            </div>
          )
        })
      }
      </div>
    )
  }}
  
  export default App;
