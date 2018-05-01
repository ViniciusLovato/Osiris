import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import List from './list/List';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div id="users-container" className="App">
          <List/>
        </div>
      </div>
    );
  }
}

export default App;