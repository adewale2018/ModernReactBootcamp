import React, { Component } from 'react'
import ShoppingForm from './ShoppingListForm';
import uuid from "uuid/v4";

class ShoppingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [ 
        {name: "Milo", qty: "2 cartons", id: uuid()},
        {name: "Milk", qty: "12 cartons", id: uuid()},
        {name: "Sugar", qty: "10 cartons", id: uuid()}
      ]
    }
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    let newItem = {...item, uuid}
    this.setState(state => ({
      items: [...state.items, newItem]
    }));
  }
  renderItems(){
    return(
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>{item.name}: {item.qty}</li>
        ))}
      </ul>
    );
  }
  render(){
    return(
      <div>
        <h1>Ramadan ShoppingList</h1>
        {this.renderItems()}
        <ShoppingForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default ShoppingList;
