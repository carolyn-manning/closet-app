import React, { Component } from 'react';


class Item extends Component {
  render () {
    return (
      <div className="item">
        <li>{this.props.brand} {this.props.size} {this.props.color}</li>
      </div>
      );
    }
}

export default Item;