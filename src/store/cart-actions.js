import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://react-redux-tutorial-2c88c-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await res.json();
      return data;
    };

    try {
      const cart = await fetchHandler();
      dispatch(cartActions.replaceData(cart));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          isDisplay: true,
          message: "Fetch Cart Data Failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        isDisplay: true,
        message: "Sending Request",
        type: "warning",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-redux-tutorial-2c88c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      console.log(data);
      dispatch(
        uiActions.showNotification({
          isDisplay: true,
          message: "Send Request Successfully",
          type: "success",
        })
      );
    };

    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          isDisplay: true,
          message: "Send Request Failed",
          type: "error",
        })
      );
    }
  };
};
