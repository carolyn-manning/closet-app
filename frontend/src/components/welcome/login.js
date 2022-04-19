import React, { Component } from 'react';


class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password: '',
            jwt: '',
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
            if(data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                this.setState({jwt: data.jwt})
                window.location.reload();
                //fix 
            }
        })
        
    }

    render () {
        return (
            <div className='log-in-form'>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(event) => this.handleEmailChange(event)}
                    value={this.state.email}
                />
                <br></br>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(event) => this.handlePasswordChange(event)}
                    value={this.state.password}
                />
                <br></br>
            <input type="submit" value="Sign In" />
            </form>
            </div>
        )
    }
}

export default LogIn;