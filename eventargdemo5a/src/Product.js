import React, { Component } from "react";
import "./Product.css";
class Product extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.remove(this.props.value, e);
  }
  render() {
    return (
      <li className="Product">
        <span>{this.props.value}</span>
        <button onClick={this.handleClick}>Delete</button>
      </li>
    );
  }
}
export default Product;
