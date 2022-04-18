import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageItems(
    state = {
        items: [],
        requesting: false
      },
      action
    ) {
      switch (action.type) {
        case "ADD_ITEM":
            const item = action.item;
            //item.id = cuidFn()
            saveItemToDB( item )///use thunk 
            .then(item => {
                console.log({ items: [...state.items, item] });
                return { items: [...state.items, item] };
            })
            

        case 'DELETE_ITEM':
            const items = state.items.filter(item => item.id !== action.id);
            return { ...state, items}

        case "START_ADDING_ITEMS_REQUEST":
            return {
                ...state,
                items: [...state.items],
                requesting: true,
            };
          
        case "ADD_ITEMS":
            return {
                ...state,
                items: action.items,
                requesting: false,
            };

        default:
            return state;
    }
}

function saveItemToDB( item ) {
    const formData = new FormData()
    formData.append('brand', item.brand)
    formData.append('size', item.size)
    formData.append('color', item.color)
    formData.append('image', item.image)

    const configObj = {
            method: "POST", 
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            },
            body: formData
        }

       return fetch(`http://localhost:4000/items/`, configObj)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            item.id = data.id
        })
}