import React, { Component } from 'react';
import LogIn from  '../components/welcome/login'
import { Link } from "react-router-dom";
import WelcomeLogo from '../components/welcome/logo';
//import LogInAction from '../actions /LogInActions';
//import { connect } from 'react-redux'

class WelcomeContainer extends Component {

  render() {
    return (
        <div className='welcome-container'>
            <WelcomeLogo/>
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

