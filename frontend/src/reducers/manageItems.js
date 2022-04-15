import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageItems (state = {items:[]}, action) {
    switch (action.type) {
        case "ADD ITEM":
            const item = { brand: action.item.brand, size: action.item.size, color: action.item.color, action_id: cuidFn() };
            return { ...state,
              items: [...state.items, item]
            }

        case 'DELETE_RESTAURANT':
            const items = state.items.filter(item => item.id !== action.action_id);
            return { ...state, items}

        default:
            return state;
    }
}