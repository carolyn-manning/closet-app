import React, { Component } from 'react';


class Item extends Component {

  handleOnClick = event => {

    this.props.deleteItem(this.props.id)

    // const configObj = {
    //   method: "DELETE", 
    //   headers: {
    //     "Content-Type": 'application/json',
    //     "Accept": "application/json",
    //   }
    // }
    // fetch(`http://localhost:4000/items/${this.props.id}`, configObj) 
    // //this.forceUpdate() 
  }

  render () {
    return (
      <li className="items-detail">
          <img src={this.props.img} alt="item-img" width="250" height="100"/>
          {this.props.brand} {this.props.size} {this.props.color}
          <button onClick={this.handleOnClick}>DELETE</button>
      </li>
      );
    }
}

export default Item;