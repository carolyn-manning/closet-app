import './App.css';
import React, { Component } from 'react';
import Items from  './components/items'
import CreateItem from  './components/create_item'
import ReactDOM from 'react-dom';




class App extends Component {

  render () {
    return (
      <div className="App">
        <CreateItem />
        <Items />
      </div>
      );
    }
}

export default App;
