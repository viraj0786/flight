import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Utils/userSlice'
import movieReducer from '../Utils/moviesSlice'

const store = configureStore({
  reducer:{
    user : userReducer,
    movies : movieReducer
  } 
})

export default store