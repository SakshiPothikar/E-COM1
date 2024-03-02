import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../actions/userAction";

const userslice = createSlice({
    name: "userslice",
    initialState: {},
    reducers: {
        userInvalidate: (state, { payload }) => {
            state.register = false
        }
    },
    extraReducers: builder => builder
        .addCase(register.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(register.fulfilled, (state, { payload }) => {
            state.loading = false
            state.registered = true
        })
        .addCase(register.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(login.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(login.fulfilled, (state, { payload }) => {
            state.loading = false
            state.auth = payload
        })
        .addCase(login.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { userInvalidate } = userslice.actions
export default userslice.reducer