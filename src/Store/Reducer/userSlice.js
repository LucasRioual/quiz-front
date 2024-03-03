import { createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    userName: null,
    },
  reducers: {
    modifyUserId: (state, actions) => {
      state.userId = actions.payload
      },
    modifyUserName: (state, actions) => {
      state.userName = actions.payload
      },
  },
});

// Action creators are generated for each case reducer function
export const { modifyUserId, modifyUserName} = userSlice.actions;

export default userSlice.reducer;
