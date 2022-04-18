import React, { Component } from 'react';

class ItemInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            color: '',
            size: '',
            image: {}, 
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
             image: event.target.files[0]
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

        // const brand = this.state.brand
        // const color = this.state.color
        // const size = this.state.size
        // const image = this.state.image

        event.preventDefault();
        this.props.addItem({brand: this.state.brand, size: this.state.size, color: this.state.color, image: this.state.image});
        
        // this.setState({
        //   brand: '',
        //   color: '',
        //   size: '',
        // });
        

        // const formData = new FormData()
        // formData.append('brand', brand)
        // formData.append('size', size)
        // formData.append('color', color)
        // formData.append('image', image)

        // const configObj = {
        //     method: "POST", 
        //     headers: {
        //         "Content-Type": 'application/json',
        //         "Accept": "application/json",
        //     },
        //     body: JSON.stringify({
        //         brand: brand,
        //         color: color,
        //         size: size,
        //         image: {image}
        //     })
        // }
        // fetch(`http://localhost:4000/items/`, configObj);
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
              <form onSubmit={(event) => this.handleSubmit(event)}>
                <input
                    id = "img-input"
                    type="file"
                    accept="image/*"
                    onChange={this.handleFileChange}
                    //value = {this.state.image}
                  />
                  <input
                      id = "brand-input"
                      type="text"
                      placeholder="Brand"
                      onChange={(event) => this.handleBrandChange(event)}
                      value={this.state.brand}
                  />
                  <input
                      id = "color-input"
                      type="text"
                      placeholder="Color"
                      onChange={(event) => this.handleColorChange(event)}
                      value={this.state.color}
                  />
                  <input
                      id = "size-input"
                      type="text"
                      placeholder="Size"
                      onChange={(event) => this.handleSizeChange(event)}
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

export default ItemInput
