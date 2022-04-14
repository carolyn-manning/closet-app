import React, { Component } from 'react';

class CreateItem extends Component {

    constructor() {
        super();
        this.state = {
            brand: '',
            color: '',
            size: '',
            img: '', //figure out why work image doest work here
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
        // const brandInput = document.getElementById('brand-input')
        // const sizeInput = document.getElementById('size-input')
        // const colorInput = document.getElementById('color-input')
        // const imgInput = document.getElementById('img-input')

        const brand = this.state.brand
        const color = this.state.color
        const size = this.state.size
        const img = this.state.img

        event.preventDefault();

        // const formData = new FormData()
        // formData.append('brand', brand)
        // formData.append('size', size)
        // formData.append('color', color)
        // formData.append('image', img)

        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json",
            },
            body: JSON.stringify({
                brand: brand,
                color: color,
                size: size,
                image: img
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
                    accept="image/png, image/jpeg"
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