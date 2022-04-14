import React, { Component } from 'react';
//import { useForm } from "react-hook-form";

class CreateItem extends Component {

    constructor() {
        super();
        this.state = {
            brand: '',
            color: '',
            size: '',
            image: '',
            clicked: false
        };
    }

    handleBrandChange = event => {
        this.setState({
          brand: event.target.value
        });
    };

    handleFileChange = event => {
         this.setState({
             img: event.target.files[0]
         })
    }

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
        const imgInput = document.getElementById('img-input')

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
                size: sizeInput.value,
                image: imgInput.value
            })
        }
        fetch(`http://localhost:4000/items/`, configObj);
        this.clickToggle()
    }

    clickToggle = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    renderForm = () => {
        return (
            <div className='create-item-form'>
              <form onSubmit={this.handleSubmit}>
                <input
                    id = "img-input"
                    type="file"
                    onChange={this.handleFileChange}
                    value={this.state.image}
                  />
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

    handleOnClick = event => {
        //debugger;
        this.clickToggle() 
    }
    
    renderButton = () => {
        return (
            <div id='create-item-button'>
              <button onClick={this.handleOnClick}> + New Item </button>
            </div>
        );
    }

    render() {
        return (
           this.state.clicked ? this.renderForm() : this.renderButton() 
           // this.renderForm() 
           //this.renderButton()
        )
      }
}

export default CreateItem;