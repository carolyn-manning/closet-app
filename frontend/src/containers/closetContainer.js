import React, { Component } from 'react';
import ItemInput from '../components/closet/itemInput'
import Items from '../components/closet/items'
import { connect } from 'react-redux'
import { fetchItems } from '../actions /itemActions';
import { saveItemToDB } from '../actions /itemActions';
import NavBar from '../components/closet/navBar';
import {deleteItem} from '../actions /itemActions';

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
    addItem: item => dispatch(saveItemToDB(item))
})

// function fetchItems() {
//     return (dispatch) => {
//       dispatch({ type: "START_ADDING_ITEMS_REQUEST" });
//       fetch('http://localhost:4000/items', {headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`}})
//         .then((response) => response.json())
//         .then((items) => {dispatch({ type: "ADD_ITEMS", items })});
//     };
// }

// function saveItemToDB( item ) {
//   const formData = new FormData()
//   formData.append('brand', item.brand)
//   formData.append('size', item.size)
//   formData.append('color', item.color)
//   formData.append('image', item.image)

//   const configObj = {
//           method: "POST", 
//           headers: {
      
//               "Authorization": `Bearer ${localStorage.getItem("jwt")}`
//           },
//           body: formData
//       }

//       return (dispatch) => {
//         dispatch({ type: "START_ADDING_ITEMS_REQUEST" }); 
//         fetch(`http://localhost:4000/items/`, configObj)
//           .then(response => response.json())
//           .then(data => {
//             item.id = data.id
//       })
// }

export default connect(mapStateToProps, mapDispatchToProps)(ClosetContainer);
