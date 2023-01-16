import React, { Component } from 'react';

class FilterButton extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            clicked: false, 
            items: [],
            itemTypes: [1, 2, 3]
        };
    }

    componentDidMount() {
        this.setState({items: this.props.items})
    }

    removeTypeDuplicates = (att) => { 
        return Array.from(new Set(this.state.items.map(item => item[att])))
    }

    handleOnClick = event => {
        this.setState({
            clicked: !this.state.clicked, 
            items: this.props.items,
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
        const typesCheckBox = this.removeTypeDuplicates("item_type").map((type) => {
            return (
                <div className='type-checkbox'>
                    <input
                        type="checkbox"
                        name={type}
                        value={type}
                        key={type}
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