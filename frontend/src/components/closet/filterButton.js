import React, { Component } from 'react';

class FilterButton extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }

    handleOnClick = event => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("type filter being built")
        this.setState({
            clicked: !this.state.clicked
        })
    }

    renderForm = () => {
        const types = ['1', '2', '3']
        // new Set(this.props.items.map(item => item.type))
        const typesCheckBox = types.map((type) => {
            return (
                <div className='type-checkbox'>
                    <input
                        type="checkbox"
                        name={type}
                        value={type}
                    />
                    <label for={type}>{type}</label>
                </div>
            )
        })
        return (
            <div className='filter-items-form'>
              <form onSubmit={(event) => this.handleSubmit(event)}>
                {typesCheckBox}
                <input type="submit" />
              </form>
            </div>
        )
    }
    
    renderButton = () => {
        return (
            <div id='filter-button-container'>
              <button id="filter-button" onClick={this.handleOnClick}> FILTER </button>
            </div>
        );
    }

    render() {        
        return (
           this.state.clicked ? this.renderForm() : this.renderButton() 
        )
      }
}

export default FilterButton