import './App.css';
import React, { Component } from 'react';
import Items from  './components/items'
import CreateItem from  './components/create_item'
import CreateItemButton from  './components/create_item_button'



class App extends Component {
  render () {
    return (
      <div className="App">
        <CreateItemButton />
        <CreateItem />
        <Items />
      </div>
      );
    }
}

export default App;
