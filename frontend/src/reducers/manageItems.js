import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageItems(
    state = {
        items: [],
      },
      action
    ) {
      switch (action.type) {
        case "ADD_ITEM":
            const item = action.item;
            saveItemToDB( item )
            item.action_id = cuidFn()
            console.log({ items: [...state.items, item] });
            return { items: [...state.items, item] };



        case 'DELETE_ITEM':
            const items = state.items.filter(item => item.action_id !== action.action_id);
            return { ...state, items}

        default:
            return state;
    }
}

function saveItemToDB( item ) {
    const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json",
            },
            body: JSON.stringify({
                brand: item.brand,
                color: item.color,
                size: item.size,
                //image: {image}
            })
        }
        fetch(`http://localhost:4000/items/`, configObj);
}