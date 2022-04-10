import './App.css';
import React, { Component } from 'react';
import Item from  './components/item'
import Items from  './components/items'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Items />
      </div>
      );
    }
}

export default App;
