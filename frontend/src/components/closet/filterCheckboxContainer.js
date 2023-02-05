import React, { Component } from 'react';
import FilterCheckbox from './filterCheckbox';

class FilterCheckboxContainer extends Component {

   
    render() {        
        return (
            <div className='filter-form'>
              <form onSubmit={(event) => this.props.handleSubmit(event)}>
                    <FilterCheckbox
                        items={this.props.items}
                        attribute="color"
                    />
                    <FilterCheckbox
                        items={this.props.items}
                        attribute="item_type"
                    />
                    <FilterCheckbox
                        items={this.props.items}
                        attribute="brand"
                    />
                <input type="submit" />
              </form>
            </div>
        )
    }
}

export default FilterCheckboxContainer