import React, { Component } from 'react';


class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleEmailChange = event => {
        this.setState({
          email: event.target.value
        });
    };

    handlePasswordChange = event => {
         this.setState({
             password: event.target.value
         })
    }

    handleSubmit = event => {
        event.preventDefault();
        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json",
            },
            body: JSON.stringify({
                user:{
                email: this.state.email,
                password: this.state.password,
                }
            })
        }

        fetch(`http://localhost:4000/login/`, configObj)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("jwt", data.jwt)
        })
    }

    render () {
        return (
            <div className='log-in-form'>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(event) => this.handleEmailChange(event)}
                    value={this.state.email}
                />
                <input
                    type="text"
                    placeholder="Password"
                    onChange={(event) => this.handlePasswordChange(event)}
                    value={this.state.password}
                />
            <input type="submit" />
            </form>
            </div>
        )
    }
}

export default LogIn;