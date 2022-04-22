///language for redux refator commented out. still working. 


//import React, { Component } from 'react';
import {useNavigate} from "react-router-dom";

export default function CreateUser() {

//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '', 
//             password: '',
//             first_name: '', 
//             last_name: '', 
//             jwt: ''
//         }
//     }

//     handleEmailChange = event => {
//         this.setState({
//           email: event.target.value
//         });
//     };

//     handlePasswordChange = event => {
//          this.setState({
//              password: event.target.value
//          })
//     }

//     handleFirstNameChange = event => {
//         this.setState({
//             first_name: event.target.value
//         })
//    }

//     handleLastNameChange = event => {
//         this.setState({
//             last_name: event.target.value
//         })
//     }

    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();

        const emailInput = document.getElementById('email-input')
        const passwordInput = document.getElementById('password-input')
        const firstNameInput = document.getElementById('first-name-input')
        const lastNameInput = document.getElementById('last-name-input')

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
                first_name: firstNameInput.value, 
                last_name: lastNameInput.value, 
                }
            })
        }

        fetch(`http://localhost:4000/users/`, configObj)
        .then(response => response.json())
        .then(data => {
            if(data.jwt) {localStorage.setItem("jwt", data.jwt)}
        })
        .then(() => {navigate('/my_closet') })   
    }

    //render () {
        return (
            <div className='new-user-form'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    type="email"
                    id = "email-input"
                    placeholder="Email"
                    // onChange={(event) => this.handleEmailChange(event)}
                    // value={this.state.email}
                />
                <br></br>
                <input
                    type="password"
                    id = "password-input"
                    placeholder="Password"
                    // onChange={(event) => this.handlePasswordChange(event)}
                    // value={this.state.password}
                />
                <br></br>
                <input
                    type="text"
                    id = "first-name-input"
                    placeholder="First Name"
                    // onChange={(event) => this.handleFirstNameChange(event)}
                    // value={this.state.first_name}
                />
                <br></br>
                <input
                    type="text"
                    id = "last-name-input"
                    placeholder="Last Name"
                    // onChange={(event) => this.handleLastNameChange(event)}
                    // value={this.state.last_name}
                />
                <br></br>
            <input type="submit" value="Sign Up" />
            </form>
            </div>
        )
   // }
}

