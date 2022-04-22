import React, { Component } from 'react';

class Item extends Component {

  handleOnClick = event => {
    this.props.deleteItem(this.props.id)
  }

  render () {
    return (
      <div className="item-detail">
          <img src={this.props.image_url} alt="item-img" width="250" height="100"/>
          <li>Brand: {this.props.brand}</li>
          <li>Size: {this.props.size}</li>
          <li>Color: {this.props.color}</li>
          <button id="delete-button" onClick={this.handleOnClick}>REMOVE FROM CLOSET</button>
      </div>
      );
    }
}

export default Item;