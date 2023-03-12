import React, { Component } from 'react';

class FilterCheckbox extends Component {

    removeDuplicates = (att) => { 
        return Array.from(new Set(this.props.items.map(item => item[att])))
    }

    render () {
        return (
            this.removeDuplicates(`${this.props.attribute}`).map((attribute) => {
                return (
                    <div className='filter-checkbox-list '>
                        <input
                            type="radio"
                            name= "item-type-name"
                            value={attribute}
                            key={attribute}
                            onChange={this.props.handleChange}
                        />
                        <label for={attribute}>{attribute}</label>
                    </div>
                )
            })
        )
    }
}

export default FilterCheckbox;