import { createSlice } from '@reduxjs/toolkit';

const initial = 0;
export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: initial
  },
  reducers: {
    incrementCounter(state) {
      return { ...state, value: state.value + 1 }
    },
    resetCounter(state) {
      return { ...state, value: initial }
    }
  }
});

export const { incrementCounter, resetCounter } = slice.actions;
export const counter = state => state.counter;
export const counterValue = state => state.counter.value;
export default slice.reducer;
