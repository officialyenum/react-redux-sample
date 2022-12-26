import { createSlice } from "@reduxjs/toolkit"

const initialCounterState = {
    counter : 0,
    showCounter:  true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increase(state) {
            state.counter++;
        },
        decrease(state) {
            state.counter--;
        },
        increaseBy(state, { payload }) {
            state.counter = state.counter + payload;
        },
        decreaseBy(state, { payload }) {
            console.log(payload);
            state.counter = state.counter - payload.amount;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
})


export const counterActions = counterSlice.actions; 
export default counterSlice.reducer;