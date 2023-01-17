import React, { Component } from 'react';

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

    removeDuplicates = (att) => { 
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
        console.log("filter being built")
        this.setState({
            clicked: !this.state.clicked
        })
    }

    renderForm = () => {
        const typesCheckBox = this.removeDuplicates("item_type").map((type) => {
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

        const colorsCheckBox = this.removeDuplicates("color").map((color) => {
            return (
                <div className='type-checkbox'>
                    <input
                        type="checkbox"
                        name={color}
                        value={color}
                        key={color}
                    />
                    <label for={color}>{color}</label>
                </div>
            )
        })

        return (
            <div className='filter-form'>
              <form onSubmit={(event) => this.handleSubmit(event)}>
                {typesCheckBox}
                {colorsCheckBox}
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