import React, { Component } from 'react';
import CreateItem from  './create_item'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";




class CreateItemButton extends Component {
  
    render () {
        return (
          <div id='create-item-button'>
            <button onclick={this.props.handleOnClick}> + New Item </button>
          </div>
          );
    }
   
}

export default CreateItemButton;