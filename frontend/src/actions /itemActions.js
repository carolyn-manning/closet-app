const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        item: item
    }
}

const deleteItem = () => {
    return {
        type: 'DELETE_ITEM'
    }
}