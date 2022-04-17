import React, { Component } from 'react';


class LogIn extends Component {

  handleOnClick = event => {console.log(event)}

    render () {
        return (
            <div className='log-in-form'>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input
                    type="text"
                    placeholder="Email"
                    //onChange={(event) => this.handleBrandChange(event)}
                    //value={this.state.brand}
                />
                <input
                    type="text"
                    placeholder="Password"
                    //onChange={(event) => this.handleColorChange(event)}
                    //value={this.state.color}
                />
            <input type="submit" />
            </form>
            </div>
        )
    }
}

export default LogIn;