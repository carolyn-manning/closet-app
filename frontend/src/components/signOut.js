import React, { Component } from 'react';


class SignOut extends Component {

  handleOnClick = event => {
    localStorage.removeItem("jwt")
  }

  render () {
    return (
      <div className="sign-out-button">
          <button onClick={this.handleOnClick}>LOG OUT</button>
      </div>
      );
    }
}

export default SignOut;