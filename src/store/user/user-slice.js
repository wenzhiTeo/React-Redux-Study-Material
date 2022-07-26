import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: undefined },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    getUser() {},
  },
});

export const { setUser, getUser } = userSlice.actions;
export default userSlice;
