import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const register = createAsyncThunk(
    "register",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.post
                ("/users", userData)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const login = createAsyncThunk(
    "login",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get("/users", {
                params: {
                    email: userData.email,
                    password: userData.password,
                }
            })
            if (data.length === 0) {
                return rejectWithValue("Email or password mismatch")
            }
            return data[0]
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
