///working on refacrtoring using redux

//import React, { Component } from 'react';




import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';


export default function LogIn() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = event => {
        setEmail( event.target.value );
    };

    const handlePasswordChange = event => {
        setPassword (event.target.value)
    }

    const navigate = useNavigate()

    const handleSubmit = event => {

        event.preventDefault();
        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json",
            },
            body: JSON.stringify({
                user:{
                email: email,
                password: password,
                }
            })
        }

        fetch(`http://localhost:4000/login/`, configObj)
        .then(response => response.json())
        .then(data => {
            if(data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                navigate('/my_closet')
            } else {
                setError("Incorrect Email or Password. Please Try Again.")
            }
        })   
    }

    return (
            <div className='log-in-form'>
            <h3>{error}</h3>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    type="email"
                    id = "email-input"
                    placeholder="Email"
                    onChange={(event) => handleEmailChange(event)}
        
                />
                <br></br>
                <input
                    type="password"
                    id = "password-input"
                    placeholder="Password"
                    onChange={(event) => handlePasswordChange(event)}
                />
                <br></br>
            <input type="submit" value="Sign In" />
            </form>
            </div>
        )
}
