import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Auth from "../../components/Auth";
import Layout from "../../components/Layout";
import Notification from "../../components/Notification";
import { fetchCartData, sendCartData } from "../../store/cart-actions";
//import { uiActions } from "../../store/ui-slice";

let isFirstRender = true;

function StoreApp() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    //thunk & action creator
    if (cart.isUpdated) dispatch(sendCartData(cart));

    // const sendRequest = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       isDisplay: true,
    //       message: "Sending Request",
    //       type: "warning",
    //     })
    //   );

    //   const res = await fetch(
    //     "https://react-redux-tutorial-2c88c-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     }
    //   );
    //   const data = await res.json();
    //   dispatch(
    //     uiActions.showNotification({
    //       isDisplay: true,
    //       message: "Send Request Successfully",
    //       type: "success",
    //     })
    //   );
    // };

    // sendRequest().catch((err) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       isDisplay: true,
    //       message: "Send Request Failed",
    //       type: "error",
    //     })
    //   );
    // });
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default StoreApp;
