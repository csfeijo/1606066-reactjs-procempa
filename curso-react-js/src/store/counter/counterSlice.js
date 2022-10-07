import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incrementCounter(state) {
      return { ...state, value: state.value + 1 }
    }
  }
});

export const { incrementCounter } = slice.actions;
export const counter = state => state.counter;
export default slice.reducer;
