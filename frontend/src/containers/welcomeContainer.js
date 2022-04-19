import React, { Component } from 'react';
import LogIn from  '../components/welcome/login'
import { Link } from "react-router-dom";



class WelcomeContainer extends Component {

  render() {
    return (
        <div className='welcome-container'>
            <div className="welcome-logo">
                <img src="https://cdn.pixabay.com/photo/2014/04/03/10/27/clothes-hanger-310515_960_720.png" alt="logo" />
            </div>
            <LogIn/>
            <Link to="/signup">New to the App? Sign Up </Link>
        </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//     signIn: jwt => dispatch(signIn(jwt))
// })


export default WelcomeContainer

