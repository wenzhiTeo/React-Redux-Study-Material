import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import counterSlice from "./counter-slice";
import uiSlice from "./ui-slice";
import userSlice from "./user/user-slice";
import { watcherSaga } from "../sagas";

import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: [sagaMiddleware, thunk],
});

sagaMiddleware.run(watcherSaga);

export default store;
