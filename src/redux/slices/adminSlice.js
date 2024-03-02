import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, getProduct, updateProduct } from "../actions/adminActions";

const adminSlice = createSlice({
    name: "admin",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            state.productAdd = false
            state.productDeleted = false
            state.updateProduct = false
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.productAdd = true
            })
            .addCase(addProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(getProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.products = payload
            })
            .addCase(getProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(deleteProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(deleteProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.productDeleted = true
            })
            .addCase(deleteProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(updateProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updateProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.updateProduct = true
            })
            .addCase(updateProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }

})
export const { invalidate } = adminSlice.actions
export default adminSlice.reducer