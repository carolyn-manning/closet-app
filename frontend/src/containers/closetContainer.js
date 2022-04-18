import React, { Component } from 'react';
import ItemInput from '../components/itemInput'
import Items from '../components/items'
import { connect } from 'react-redux'

class ClosetContainer extends Component {

  componentDidMount() {
      this.props.fetchItems()
  }
    
  render() {
    return (
      <div>
        <ItemInput
          addItem={this.props.addItem}
        />
        <Items
          items={this.props.items}
          deleteItem={this.props.deleteItem}
        />
      </div>
    );
  }
}

const mapStateToProps = ({items}) => {
  return {items}
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch({type: 'ADD_ITEM', item}),
    deleteItem: id => dispatch({type: 'DELETE_ITEM', id}), 
    fetchItems: () => dispatch(fetchItems())
  })

function fetchItems() {
    return (dispatch) => {
      dispatch({ type: "START_ADDING_ITEMS_REQUEST" });
      fetch('http://localhost:4000/items', {headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`}})
        .then((response) => response.json())
        .then((items) => {console.log(items); dispatch({ type: "ADD_ITEMS", items })});
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClosetContainer);
