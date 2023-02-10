

export function isColor (item, color){ 
    return  item.color == color;
}

export function isBrand (item, brand) { 
    return  item.brand == brand;

}

export function isType (item, item_type) { 
    return  item.item_type == item_type;
}

export function filter (items, filter, attribute) { 
    return items.filter(item => filter(item, attribute))
}




