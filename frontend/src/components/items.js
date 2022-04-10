import React, { Component } from 'react';
//import Item


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
        return (
            <div className="Items">
          
            </div>
         );
    }
}

export default Items;