import React, { Component } from 'react';

class ItemInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            color: '',
            size: '',
            image: '', 
            itemType: '',
            clicked: false
        };
    }

    handleBrandChange = (event) => {
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

    handleTypeChange = event => {
        this.setState({
          itemType: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem({brand: this.state.brand, size: this.state.size, color: this.state.color, image: this.state.image, item_type: this.state.itemType});
        
        this.setState({
          brand: '',
          color: '',
          size: '',
          image: '', 
          itemType: '',
          clicked: false
        });

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
                    // breaks when above is umcommented
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
                  <input
                      id = "type-input"
                      type="text"
                      placeholder="Type"
                      onChange={(event) => this.handleTypeChange(event)}
                      value={this.state.itemType}
                  />
                <input type="submit" />
              </form>
            </div>
        )
    }

    handleOnClick = event => {
        this.clickToggle() 
    }
    
    renderButton = () => {
        return (
            <div id='create-item-button'>
              <button id="add-item-button" onClick={this.handleOnClick}> + ADD ITEM TO CLOSET </button>
            </div>
        );
    }

    render() {
        return (
           this.state.clicked ? this.renderForm() : this.renderButton() 
        )
      }
}

export default ItemInput
