import React, { Component } from "react";
import ProductList from "./ProductList";
class App extends Component {
  render() {
    return (
      <div>
        <ProductList
          items={[
            "JBL Earphones",
            "PoleStart BackPack",
            "One-Plus Nord 2",
            "Apple I-Phone 13",
            "Cannon DSLR",
            "Dettol N-95 Mask",
          ]}
        />
      </div>
    );
  }
}
export default App;
