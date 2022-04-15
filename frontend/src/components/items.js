import React, { Component } from 'react';
import Item from './item'


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
            return <Item key={item.id} size={item.size} brand={item.brand} id={item.id} color={item.color}/>
        })
        return (
            <div className="items">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default Items;