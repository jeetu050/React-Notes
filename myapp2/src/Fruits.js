import React, { Component } from "react";
import foods from "./food";
import { choice, remove } from "./helper";
class Fruits extends Component {
  render() {
    let fruit = choice(foods);
    let remaining = remove(foods, fruit);
    return (
      <div>
        <p>Total fruits:{foods.length}</p>
        <p>They are:{foods.join()}</p>
        <p>Chosen fruit:{fruit}</p>
        <p>Remaining fruits:{remaining.length}</p>
        <p>They are:{remaining.join()}</p>
      </div>
    );
  }
}
export default Fruits;
