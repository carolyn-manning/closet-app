///language for redux refator commented out. still working. 

//import React, { Component } from 'react';
import {useNavigate} from "react-router-dom";

export default function LogIn() {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: '', 
    //         password: '',
    //     }
    // }

    // handleEmailChange = event => {
    //     this.setState({
    //       email: event.target.value
    //     });
    // };

    // handlePasswordChange = event => {
    //      this.setState({
    //          password: event.target.value
    //      })
    // }

    const navigate = useNavigate()

    const handleSubmit = event => {
        const emailInput = document.getElementById('email-input')
        const passwordInput = document.getElementById('password-input')

        event.preventDefault();
        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json",
            },
            body: JSON.stringify({
                user:{
                email: emailInput.value,
                password: passwordInput.value,
                }
            })
        }

        fetch(`http://localhost:4000/login/`, configObj)
        .then(response => response.json())
        .then(data => {
            if(data.jwt) { localStorage.setItem("jwt", data.jwt) ;}
        })
        .then(() => {navigate('/my_closet') })    
    }

        return (
            <div className='log-in-form'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    type="email"
                    id = "email-input"
                    placeholder="Email"
                  //  onChange={(event) => this.handleEmailChange(event)}
        
                />
                <br></br>
                <input
                    type="password"
                    id = "password-input"
                    placeholder="Password"
                   // onChange={(event) => this.handlePasswordChange(event)}
        
                />
                <br></br>
            <input type="submit" value="Sign In" />
            </form>
            </div>
        )
}
