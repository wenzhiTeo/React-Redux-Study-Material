import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const setShowCart = () => {
    dispatch(cartActions.setShowCart());
  };

  const quantity = useSelector((state) => state.cart.totalQty);
  return (
    <div className="cartIcon">
      <h3 onClick={setShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
