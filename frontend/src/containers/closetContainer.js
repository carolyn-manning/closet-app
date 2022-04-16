import React, { Component } from 'react';
import ItemInput from '../components/itemInput'
import Items from '../components/items'
import { connect } from 'react-redux'



class ClosetContainer extends Component {
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
    deleteItem: action_id => dispatch({type: 'DELETE_ITEM', action_id})
  })

  export default connect(mapStateToProps, mapDispatchToProps)(ClosetContainer);
