import './App.css';
import React, { Component } from 'react';
//import Items from  './components/items'
//import CreateItem from  './components/itemInput'
import ReactDOM from 'react-dom';
import ClosetContainer from  './containers/closetContainer'
import LogIn from  './components/login'
import SignOut from  './components/signOut.js'


class App extends Component {

  render () {
    if(localStorage.jwt) {
      return ( 
        <div className="App"> 
            <ClosetContainer />
            <SignOut />
        </div> 
      )
    } else {
      return ( 
        <div className="App"> <LogIn /> </div> 
      )
    }
  }
}


export default App;
