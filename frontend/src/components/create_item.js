import React, { Component } from 'react';
//import { useForm } from "react-hook-form";

class CreateItem extends Component {

    constructor() {
        super();
        this.state = {
            brand: '',
            color: '',
            size: '',
            clicked: false
        };
    }

    handleBrandChange = event => {
        this.setState({
          brand: event.target.value
        });
    };

    handleColorChange = event => {
        this.setState({
          color: event.target.value
        });
    };

    handleSizeChange = event => {
        this.setState({
          size: event.target.value
        });
    };

    handleSubmit = event => {
        const brandInput = document.getElementById('brand-input')
        const sizeInput = document.getElementById('size-input')
        const colorInput = document.getElementById('color-input')

        event.preventDefault();

        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json",
            },
            body: JSON.stringify({
                brand: brandInput.value,
                color: colorInput.value,
                size: sizeInput.value
            })
        }
        fetch(`http://localhost:4000/items/`, configObj)
        this.setState({
            clicked: !this.state.clicked
        });
    }

    renderForm = () => {
        return (
            <div className='create-item-form'>
              <form onSubmit={this.handleSubmit}>
                  <input
                      id = "brand-input"
                      type="text"
                      placeholder="Brand"
                      onChange={this.handleBrandChange}
                      value={this.state.brand}
                  />
                  <input
                      id = "color-input"
                      type="text"
                      placeholder="Color"
                      onChange={this.handleColorChange}
                      value={this.state.color}
                  />
                  <input
                      id = "size-input"
                      type="text"
                      placeholder="Size"
                      onChange={this.handleSizeChange}
                      value={this.state.size}
                  />
                <input type="submit" />
              </form>
            </div>
        )
    }

    renderButton = () => {
        return (
            <div id='create-item-button'>
              <button onclick={this.props.handleOnClick}> + New Item </button>
            </div>
        );
    }

    render() {
        return (
            this.renderForm()
            
        )
      }
}

export default CreateItem;