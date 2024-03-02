import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice";
import publicSlice from "./slices/publicSlice";
import userslices from "./slices/userslices";

const reduxStore = configureStore({
    reducer: {
        admin: adminSlice,
        public: publicSlice,
        user: userslices
    }
})
export default reduxStore