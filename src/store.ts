import { configureStore } from "@reduxjs/toolkit";

// Reducer sencillo (ejemplo contador)
const counterReducer = (state = { value: 0 }, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
  devTools: true,
});

export default store;
