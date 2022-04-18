import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageItems(
    state = {
        items: [],
        requesting: false
      },
      action
    ) {
        const item = action.item;
        switch (action.type) {
            case "START_ADDING_ITEM_REQUEST":
                console.log(state) 
                //const item = action.item;
                //saveItemToDB(item)
                return {
                    ...state,
                    items: [...state.items],
                    requesting: true,
                };

            case "ADD_ITEM":
                console.log(state) 
                //const item = action.item;
                // saveItemToDB(item)
                // .then((item) => {return { items: [...state.items, item] } } )
                return {
                    items: [...state.items, item],
                    requesting: false,
                }; 
                    

            case 'DELETE_ITEM':
                console.log(state)
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

