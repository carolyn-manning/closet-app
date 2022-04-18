import React, { Component } from 'react';
import Item from './item'
//import Grid  from '@material-ui/core/Grid';



class Items extends Component {

    // state = {
    //     items : []
    // }

    // componentDidMount() {
    //     fetch('http://localhost:4000/items')
    //       .then((response) => response.json())
    //       .then((data) => { console.log(data)
    //         this.setState({
    //             items: data,
    //           });
    //       });
    // }

    render () {
        const items = this.props.items.map((item) => {
            //const img = item.image_url
            //const imgURL = 'require(`${img}`)' 
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