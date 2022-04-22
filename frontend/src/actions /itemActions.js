export function fetchItems() {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_ITEMS_REQUEST" });
    fetch('http://localhost:4000/items', {headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`}})
      .then((response) => response.json())
      .then((items) => {
        dispatch({ type: "ADD_ITEMS", items })});
  };
}

export function saveItemToDB( item ) {
  const formData = new FormData()
  formData.append('brand', item.brand)
  formData.append('size', item.size)
  formData.append('color', item.color)
  if(item.image !== '') {formData.append('image', item.image)}

  const configObj = {
          method: "POST", 
          headers: {
              "Authorization": `Bearer ${localStorage.getItem("jwt")}`
          },
          body: formData
      }

      return (dispatch) => {
        dispatch({ type: "START_ADDING_ITEM_REQUEST" }); 
        fetch(`http://localhost:4000/items/`, configObj)
          .then(response => response.json())
          .then((data) => {
            item.id = data.id;
            item.image_url = data.image_url;
            dispatch({ type: "ADD_ITEM", item })

      })
    }
}

export function deleteItem(id) {
  const configObj = {
    method: "DELETE", 
    headers: {
      "Content-Type": 'application/json',
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`
    }
  }
  
  return (dispatch) => {
    fetch(`http://localhost:4000/items/${id}`, configObj) 
    .then(response => response.json())
    .then((data) =>  dispatch({ type: "DELETE_ITEM", id}))
  }
      
}





