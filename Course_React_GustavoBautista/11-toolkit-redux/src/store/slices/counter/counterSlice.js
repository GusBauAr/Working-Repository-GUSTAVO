import { createSlice } from '@reduxjs/toolkit'

// const initialState = {//creamos el initial state
//   value: 0,
// }

export const counterSlice = createSlice({
  name: 'counter',
    //el initial state es igual a un objeto
  initialState:{
    counter: 10,
    times:0,

  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement:(state)=>{
      state.counter -= 1;
    },
    incrementBy2:(state)=>{
      state.counter += 2;
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy2} = counterSlice.actions
