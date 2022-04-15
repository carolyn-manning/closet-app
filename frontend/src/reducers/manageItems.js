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
            item.action_id = cuidFn()
            console.log({ items: [...state.items, action.item] });
            return { items: [...state.items, action.item] };

        // case 'DELETE_RESTAURANT':
        //     const items = state.items.filter(item => item.id !== action.action_id);
        //     return { ...state, items}

        default:
            return state;
    }
}