import React, { Component } from 'react';


class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password: '',
            first_name: '', 
            last_name: '', 
            jwt: ''
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

    handleFirstNameChange = event => {
        this.setState({
            first_name: event.target.value
        })
   }

    handleLastNameChange = event => {
        this.setState({
            last_name: event.target.value
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

        fetch(`http://localhost:4000/users/`, configObj)
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
            <div className='new-user-form'>
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
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={(event) => this.handleFirstNameChange(event)}
                    value={this.state.first_name}
                />
                <br></br>
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(event) => this.handleLastNameChange(event)}
                    value={this.state.last_name}
                />
                <br></br>
            <input type="submit" value="Sign Up" />
            </form>
            </div>
        )
    }
}

export default CreateUser;