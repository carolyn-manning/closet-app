
//currently not in use 

import './App.css';
import React, { Component } from 'react';
import ClosetContainer from  './containers/closetContainer'
import WelcomeContainer from './containers/welcomeContainer';

class App extends Component {

  render () {
    if(localStorage.jwt) {
      return ( 
        <div className="App"> 
            <ClosetContainer />
        </div> 
      )
    } else {
      return ( 
        <div className="Welcome"> <WelcomeContainer /> </div> 
      )
    }
  }
}


export default App;
