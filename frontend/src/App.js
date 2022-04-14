import './App.css';
import React, { Component } from 'react';
import Items from  './components/items'
import CreateItem from  './components/create_item'
import CreateItemButton from  './components/create_item_button'
import ReactDOM from 'react-dom';




class App extends Component {
  handleOnClick = event => {
    ReactDOM.unmountComponentAtNode(document.getElementById('create-item-button'))
  }

  render () {
    return (
      <div className="App">
        <CreateItemButton handleOnClick={this.handleOnClick} />
        <CreateItem />
        <Items />
      </div>
      );
    }
}

export default App;
