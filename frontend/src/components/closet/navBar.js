import React, { Component } from 'react';
import { SignOut } from './signOut';


class NavBar extends Component {

  render () {
    return (
      <div className="nav-bar">
        <div className="nav-bar-logo">
            <img src="https://cdn.pixabay.com/photo/2014/04/03/10/27/clothes-hanger-310515_960_720.png" alt="logo" />
        </div>
        <SignOut />
      </div>
      );
    }
}

export default NavBar;