import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    basket: [],
}
const baseUrl = "http://localhost:5000/api/Produc"



export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            const existProduct = state.basket.find((item) => item._id === action.payload._id)
            if (!existProduct) {
                state.basket.push({ ...action.payload, count: 1 })
            } else {
                existProduct.count += 1
            }
        },
        deleteBasket: (state, action) => {
            state.basket = state.basket.filter((item) => item._id !== action.payload._id)
        },
        plusBtn: (state, action) => {
            const product = state.basket.find((item) => item._id === action.payload._id)
            product.count += 1
        },
        minusBtn: (state, action) => {
            const product = state.basket.find((item) => item._id === action.payload._id)
            product.count -= 1
        }
    },

})

export const { addBasket, deleteBasket, minusBtn, plusBtn } = basketSlice.actions

export default basketSlice.reducer