import React, { Component } from "react";
import ProductList from "./ProductList";
class App extends Component {
  render() {
    return (
      <div>
        <ProductList
          items={[
            { name: "JBL Earphones", qty: 2 },
            { name: "PoleStart BackPack", qty: 3 },
            { name: "One-Plus Nord 2", qty: 1 },
            { name: "Apple I-Phone 13", qty: 2 },
            { name: "Cannon DSLR", qty: 3 },
            { name: "Dettol N-95 Mask", qty: 4 },
          ]}
        />
      </div>
    );
  }
}
export default App;
