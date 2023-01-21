import React, { Component } from 'react';
import FilterCheckbox from './filterCheckbox';

class FilterButton extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            clicked: false, 
            items: [],
        };
    }

    componentDidMount() {
        this.setState({items: this.props.items})
    }

    handleOnClick = event => {
        this.setState({
            clicked: !this.state.clicked, 
            items: this.props.items,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("filter being built")
        this.setState({
            clicked: !this.state.clicked
        })
    }

    renderForm = () => {
        return (
            <div className='filter-form'>
              <form onSubmit={(event) => this.handleSubmit(event)}>
                    <FilterCheckbox
                        items={this.state.items}
                        attribute="color"
                    />
                    <FilterCheckbox
                        items={this.state.items}
                        attribute="item_type"
                    />
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