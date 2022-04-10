import './App.css';
import React, { Component } from 'react';
import Item from  './components/item'
import Items from  './components/items'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Items />
        <Item size="1" brand="test" color="black" />
      </div>
      );
    }
}

export default App;
