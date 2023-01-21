import React, { Component } from 'react';

class FilterCheckbox extends Component {

    removeDuplicates = (att) => { 
        return Array.from(new Set(this.props.items.map(item => item[att])))
    }

    render () {
        return (
            this.removeDuplicates(`${this.props.attribute}`).map((attribute) => {
                return (
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            name={attribute}
                            value={attribute}
                            key={attribute}
                        />
                        <label for={attribute}>{attribute}</label>
                    </div>
                )
            })
        )
    }
}

export default FilterCheckbox;