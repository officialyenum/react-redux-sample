import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = {
    isAuthenticated: true,
}

const authSlice = createSlice({
    name: 'authenticate',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})


export const authActions = authSlice.actions; 
export default authSlice.reducer;