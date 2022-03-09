
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
  };
  
  
const authSlice = createSlice({
    name: "Auth",
    initialState: initialAuthState,
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });
  
  // const counterReducer = (state = initialState, action) => {
  //   if (action.type === "increment") {
  //     return {
  //       counter: state.counter + 1,
  //       showCounter: state.showCounter,
  //     };
  //   }
  
  //   if (action.type === "increase") {
  //     return {
  //       counter: state.counter + action.value,
  //       showCounter: state.showCounter,
  //     };
  //   }
  
  //   if (action.type === "decrement") {
  //     return {
  //       counter: state.counter - 1,
  //       showCounter: state.showCounter,
  //     };
  //   }
  
  //   if (action.type === "toggle") {
  //     return {
  //       showCounter: !state.showCounter,
  //       counter: state.counter,
  //     };
  //   }
  //   return state;
  // };
  
  // const store = createStore(counterReducer);

  export const authActions = authSlice.actions;
   export default authSlice;