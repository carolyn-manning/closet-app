import React, { Component } from 'react';
import CreateItem from  './create_item'


class CreateItemButton extends Component {


    render () {
        return (
          <div id="create-item-button">
            <button onclick={this.handleOnClick}> + New Item </button>.
          </div>
          );
    }
   
}

export default CreateItemButton;