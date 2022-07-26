import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user-handle";

/*
  The way of setup Watch Sage is different between normal redux & redux toolkit
  in redux-toolkit we should use "-sliceName-/-operationName- as below
*/

export function* watcherSaga() {
  yield takeLatest("user/getUser", handleGetUser);
}
