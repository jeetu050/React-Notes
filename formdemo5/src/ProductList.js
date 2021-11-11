import React, { Component } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";
import "./ProductList.css";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  addItem(newItem, e) {
    let allItems = this.state.items;
    let found = false;
    for (let item of allItems) {
      if (item.name.toLowerCase() === newItem.name.toLowerCase()) {
        item.qty = item.qty + Number(newItem.qty);
        found = true;
        break;
      }
    }
    if (found) {
      this.setState({ items: allItems });
    } else {
      newItem.qty = Number(newItem.qty);
      this.setState((currState) => ({ items: [...currState.items, newItem] }));
    }
  }
  deleteItem(item, e) {
    let arr = this.state.items.filter((x) => x !== item);
    this.setState({ items: arr });
  }
  render() {
    let list = this.state.items.map((x) => (
      <Product key={x} value={x} remove={this.deleteItem} />
    ));
    return (
      <div className="ProductList">
        <h1>Your Shopping Cart</h1>
        <div>
          <table border="0">
            <tbody>{list}</tbody>
          </table>
        </div>
        <hr />
        <div>
          <h1>Add New Product</h1>
          <ProductForm add={this.addItem} />
        </div>
      </div>
    );
  }
}
export default ProductList;
