import React, { useState } from "react";
import QuantityPicker from "./quantitypicker";
import "./item.css";

const Item = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    console.log("adding to cart");
  };

  const handleQuantityChange = (val) => {
    console.log("quantity change", val);
    setQuantity(val);
  };

  const getControls = () => {
    return (
      <div className="item-controls">
        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
        <button onClick={handleAdd} className="btn btn-sm btn-dark">
          Add to Cart
        </button>
      </div>
    );
  };
  const getTotal = () => {
    let price = 10;
    return 10 * quantity;
  };

  return (
    <div className="item">
      <img src="https://picsum.photos/230/280" alt=""></img>
      <h5>{props.title}</h5>
      <label>Total</label>
      <label>$ {props.price}</label>
      {getControls()}
    </div>
  );
};

export default Item;
