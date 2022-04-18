import React, { Component } from 'react';


class SignOut extends Component {

  handleOnClick = event => {
    localStorage.removeItem("jwt")
  }

  render () {
    return (
      <div className="sign-out-container">
          <button id="sign-out-button" onClick={this.handleOnClick}>LOG OUT</button>
      </div>
      );
    }
}

export default SignOut;