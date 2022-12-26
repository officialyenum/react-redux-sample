import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./auth";
import CounterReducer from './counter'

// const reducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case 'INCREASE':
//             return {
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             }
//         case 'DECREASE':
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             }
//         case 'INCREASE_BY':
//             return {
//                 counter: state.counter + payload,
//                 showCounter: state.showCounter
//             }
//         case 'DECREASE_BY':
//             return {
//                 counter: state.counter - payload,
//                 showCounter: state.showCounter
//             }
//         case 'TOGGLE_COUNTER':
//             return {
//                 counter: state.counter,
//                 showCounter: !state.showCounter
//             }
//         default:
//             return state
//     }
// }


const store = configureStore({
    reducer: { 
        counter: CounterReducer,
        auth: AuthReducer
    }
});

export default store;