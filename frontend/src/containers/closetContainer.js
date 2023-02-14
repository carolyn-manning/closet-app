import React, { Component } from 'react';
import ItemInput from '../components/closet/itemInput'
import Items from '../components/closet/items'
import { connect } from 'react-redux'
import { fetchItems } from '../actions /itemActions';
import { saveItemToDB } from '../actions /itemActions';
import NavBar from '../components/closet/navBar';
import {deleteItem} from '../actions /itemActions';
import FilterButton from '../components/closet/filterButton';
import { filterItems } from '../actions /itemActions';

class ClosetContainer extends Component {

  componentDidMount() {
      this.props.fetchItems()
  }
    
  render() {
    return (
      <div>
        <NavBar />
        <ItemInput
          addItem={this.props.addItem}
        />
        <Items
          items={this.props.items}
          deleteItem={this.props.deleteItem}
        />
        <FilterButton
          items={this.props.items}
          filterItems={this.props.filterItems}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.manageItems.items
} }

const mapDispatchToProps = dispatch => ({
    deleteItem: id => dispatch(deleteItem(id)), 
    fetchItems: () => dispatch(fetchItems()),
    addItem: item => dispatch(saveItemToDB(item)), 
    filterItems: () => dispatch(filterItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(ClosetContainer);
