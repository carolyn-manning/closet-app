import React, { Component } from 'react';
import Item from './item'
//import Grid  from '@material-ui/core/Grid';



class Items extends Component {

    render () {
        const items = this.props.items.map((item) => {
            return (
                <Item image_url={`http://localhost:4000/${item.image_url}`} key={item.id} size={item.size} brand={item.brand} color={item.color} id={item.id} deleteItem={this.props.deleteItem}/>

            )
        })

        return (
            <div className="items-container">
                <div className='items'>
                    {items}
                </div>
            </div>
        );
    }
}

export default Items;