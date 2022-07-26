import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../requests/user-request";
import { setUser } from "../../store/user/user-slice";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
