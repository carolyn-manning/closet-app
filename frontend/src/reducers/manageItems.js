
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
                return {
                    ...state,
                    items: [...state.items],
                    requesting: true,
                };

            case "ADD_ITEM":
                return {
                    items: [...state.items, item],
                    requesting: false,
                }; 
                    
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

            case "FILTER_ITEMS":
                console.log("filter build in progress")
                return state ;

        default:
            return state;
    }
}

