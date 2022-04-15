import './App.css';
import React, { Component } from 'react';
//import Items from  './components/items'
//import CreateItem from  './components/itemInput'
import ReactDOM from 'react-dom';
import ClosetContainer from  './containers/closetContainer'




class App extends Component {

  render () {
    return (
      <div className="App">
        <ClosetContainer />
      </div>
      );
    }
}

export default App;
