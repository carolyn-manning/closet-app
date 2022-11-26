import React, { Component } from 'react';
import LogIn from  '../components/welcome/login'
import { Link } from "react-router-dom";
//import LogInAction from '../actions /LogInActions';
//import { connect } from 'react-redux'

class WelcomeContainer extends Component {

  render() {
    return (
        <div className='welcome-container'>
            <div className="welcome-logo">
                <img src="clothes-hanger.png" alt="logo" className="logo" />
            </div>
            <LogIn />
            <Link to="/sign_up">New to the App? Sign Up </Link>
        </div>
    );
  }
};

export default WelcomeContainer;

// const mapDispatchToProps = dispatch => ({
//     logIn: userCredentials => dispatch(LogInAction(userCredentials))
// })

//export default connect(null, mapDispatchToProps)(WelcomeContainer);

