import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    wishlist: [],
}
const baseUrl = "http://localhost:5000/api/Produc"



export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addWish: (state, action) => {
            const existProduct = state.wishlist.find((item) => item._id === action.payload._id)
            if (!existProduct) {
                state.wishlist.push({ ...action.payload })
            }
        },
        deleteWish: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item._id !== action.payload._id)
        },

    },

})

// Action creators are generated for each case reducer function
export const { addWish, deleteWish, } = wishlistSlice.actions


export default wishlistSlice.reducer

