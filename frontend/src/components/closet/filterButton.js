import React, { Component } from 'react';
import FilterCheckboxContainer from './filterCheckboxContainer';

class FilterButton extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            clicked: false, 
            items: [],
            itemType: ''
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
        this.setState({
            clicked: !this.state.clicked
        });
        this.props.filterItems()
        console.log(event.target.value)
    }

    renderForm = () => {
        return (
            <FilterCheckboxContainer
                items={this.state.items}
                handleSubmit={this.handleSubmit}
            />
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