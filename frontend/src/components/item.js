import React, { Component } from 'react';


class Item extends Component {

  handleOnClick = event => {
    const configObj = {
      method: "DELETE", 
      headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json",
      }
    }
    fetch(`http://localhost:4000/items/${this.props.id}`, configObj) 
    //this.forceUpdate() 
  }

  render () {
    return (
      <li className="items-detail">
          {this.props.brand} {this.props.size} {this.props.color}
          <button onClick={this.handleOnClick}>DELETE</button>
      </li>
      );
    }
}

export default Item;