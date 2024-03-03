import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './Reducer/gameSlice'
import userReducer from './Reducer/userSlice'



export default configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer
  },
})