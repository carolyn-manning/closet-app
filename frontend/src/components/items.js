import React, { Component } from 'react';
import Item from './item'


class Items extends Component {

    state = {
        items : []
    }

    componentDidMount() {
        fetch('http://localhost:4000/items')
          .then((response) => response.json())
          .then((data) => { console.log(data)
            this.setState({
                items: data,
              });
          });
      }

    render () {
        const items = this.state.items.map((item) => {
            return <Item key={item.id} size={item.size} brand={item.brand} color={item.color}/>
        })
        return (
            <div className="items">
                {items}
            </div>
        );
    }
}

export default Items;