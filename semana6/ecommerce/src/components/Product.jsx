import React from "react";
import "../styles/product.css";
import "../styles/mobile.css";

const Product = (props) => {
  return (
    <div className="productContainer">
      <img src={props.img} alt="Product" />
      <div className="prodTitleAndPrice">
        <h4>{props.title} </h4>
        <p> ${props.price}</p>
      </div>
      <button onClick={props.onClick}>Add to Card </button>
    </div>
  );
};

export default Product;
