import React, { Component } from 'react';
//import { useNavigate } from "react-router-dom";


class SignOut extends Component {

  handleOnClick = event => {
   // let navigate = useNavigate()
    localStorage.removeItem("jwt");
    //navigate("/")
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