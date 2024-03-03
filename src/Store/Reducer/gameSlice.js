import { createSlice } from '@reduxjs/toolkit';



export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameCode: null,  
    newPlayer: null,
    },
  reducers: {
    modifyCode: (state, actions) => {
      state.gameCode = actions.payload
      },
    setNewPlayer: (state, actions) => {
      state.newPlayer = actions.payload
      }
  },
});

// Action creators are generated for each case reducer function
export const {modifyCode, setNewPlayer} = gameSlice.actions;

export default gameSlice.reducer;
