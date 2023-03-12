import React, { Component } from 'react';
import FilterCheckbox from './filterCheckbox';

class FilterCheckboxContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item_type: '' 
        };
    }

    handleChange = (event) => {
        this.setState(
            {item_type: event.target.value}
        )
    }

    render() {        
        return (
            <div className='form'>
              <form id='filter-form' onSubmit={(event) => this.props.handleSubmit(event)}>
                    <FilterCheckbox
                        items={this.props.items}
                        attribute="item_type"
                        handleChange={this.handleChange}
                    />
                <input type="submit" />
              </form>
            </div>
        )
    }
}

export default FilterCheckboxContainer