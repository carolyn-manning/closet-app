// const addItem = (item) => {
//     return {
//         type: "ADD_ITEM",
//         item: item
//     }
// }

// const deleteItem = () => {
//     return {
//         type: 'DELETE_ITEM'
//     }
// }

export default function fetchItems() {
    return (dispatch) => {
      dispatch({ type: "START_ADDING_ITEMS_REQUEST" });
      fetch('http://localhost:4000/items')
        .then((response) => response.json())
        .then((items) => dispatch({ type: "ADD_ITEMS", items }));
    };
}