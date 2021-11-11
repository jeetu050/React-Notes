import React, { Component } from "react";
import Product from "./Product";
import "./ProductList.css";
class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items };
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(item, e) {
    // =====(I)
    // let arr=[];
    // for(let i=0;i<this.state.items.length;i++)
    // {
    //     if(this.state.items[i]!=item)
    //     arr.push(this.state.items[i]);
    // }
    //this.setState({ items: arr });
    //=====(II)
    // let arr = [];
    // let index = this.props.items.indexOf(item);
    // arr = [
    //   ...this.props.items.slice(0, index),
    //   ...this.props.items.slice(index + 1),
    // ];
    //this.setState({ items: arr });
    //====(III)
    let arr = this.state.items.filter((x) => x !== item);
    this.setState({ items: arr });
  }
  render() {
    let list = this.state.items.map((x) => (
      <Product key={x} value={x} remove={this.deleteItem} />
    ));
    return (
      <div className="ProductList">
        <h1>Available Products</h1>
        <hr />
        <div>
          <ul>{list}</ul>
        </div>
      </div>
    );
  }
}
export default ProductList;
