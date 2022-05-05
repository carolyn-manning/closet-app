import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';


export default function CreateUser() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleEmailChange = event => {
        setEmail( event.target.value );
    };

    const handlePasswordChange = event => {
        setPassword (event.target.value)
    }

    const handleFirstNameChange = event => {
        setFirstName( event.target.value );
    }
        
    const handleLastNameChange = event => {
        setLastName( event.target.value );
    }

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
                first_name: firstName, 
                last_name: lastName, 
                }
            })
        }

        fetch(`http://localhost:4000/users/`, configObj)
        .then(response => response.json())
        .then(data => {
            if(data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                navigate('/my_closet')
            } else {
                setError("There is already an email for this account")
            }
        })
    }

    return (
        <div className='new-user-form'>
        <h3>{error}</h3>
        <form onSubmit={(event) => handleSubmit(event)}>
            <input
                type="email"
                id = "email-input"
                placeholder="Email"
                onChange={(event) => handleEmailChange(event)}
                value={email}
            />
            <br></br>
            <input
                type="password"
                id = "password-input"
                placeholder="Password"
                onChange={(event) => handlePasswordChange(event)}
                value={password}
            />
            <br></br>
            <input
                type="text"
                id = "first-name-input"
                placeholder="First Name"
                onChange={(event) => handleFirstNameChange(event)}
                value={firstName}
            />
            <br></br>
            <input
                type="text"
                id = "last-name-input"
                placeholder="Last Name"
                onChange={(event) => handleLastNameChange(event)}
                value={lastName}
            />
            <br></br>
            <input type="submit" value="Sign Up" />
        </form>
        </div>
        )
}

