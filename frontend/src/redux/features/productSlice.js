import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
};
const baseUrl = "http://localhost:5000/api/Produc";

export const getData = createAsyncThunk("getproduct", async () => {
    const { data } = await axios.get(`${baseUrl}`);
    return data.products;
});

// Define addProduct async thunk
export const addProduct = createAsyncThunk("addproduct", async (product) => {
    const { data } = await axios.post(`${baseUrl}`, product);
    return data;
});

export const productSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload);
        });
    }
});

export default productSlice.reducer;
