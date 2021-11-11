import React, { Component } from "react";
import "./ProductForm.css";
class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      qty: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.add(this.state);
    this.setState({ name: "", qty: "" });
  }
  render() {
    return (
      <div className="ProductForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="pname">Item Name</label>
          <br />
          <input
            type="text"
            id="pname"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
          />
          <br />
          <label htmlFor="qty">Quantity</label>
          <br />
          <input
            type="text"
            id="qty"
            onChange={this.handleChange}
            name="qty"
            value={this.state.qty}
          />
          <br />
          <button>Add To Cart</button>
        </form>
      </div>
    );
  }
}
export default ProductForm;
