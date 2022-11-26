import React, { Component } from 'react';
import { SignOut } from './signOut';


class NavBar extends Component {

  render () {
    return (
      <div className="nav-bar">
        <div className="nav-bar-logo">
            <img src="clothes-hanger.png" alt="logo" className="logo"/>
        </div>
        <SignOut />
      </div>
      );
    }
}

export default NavBar;