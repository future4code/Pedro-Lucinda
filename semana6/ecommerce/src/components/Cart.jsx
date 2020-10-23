import React from "react";
import "../styles/cart.css";
import "../styles/mobile.css";

class Cart extends React.Component {
  render() {
    return (
      <div className="cartContainer">
        <h1>Cart</h1>
        <h4>Total: {this.props.total}</h4>
      </div>
    );
  }
}

export default Cart;
