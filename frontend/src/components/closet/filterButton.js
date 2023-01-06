import React, { Component } from 'react';

class FilterButton extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            clicked: false, 
            items: []
        };
        //this.types = this.props.items
        //new Set(this.props.items.map(item => item.type));
    }

    removeDuplicates = () => {

    }

    componentDidMount() {
        this.setState({
            items: this.props.items
        })
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
        const typesCheckBox = this.state.items.map((type) => {
            return (
                <div className='type-checkbox'>
                    <input
                        type="checkbox"
                        name={type.item_type}
                        value={type.item_type}
                        key={type.item_type}
                    />
                    <label for={type.item_type}>{type.item_type}</label>
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