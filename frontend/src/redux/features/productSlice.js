import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  allProducts: [],
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
export const delProduct = createAsyncThunk("delete", async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
  return id;
});

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    sortlow: (state) => {
      state.products.sort((a, b) => a.title.localeCompare(b.title));
    },
    sorthigh: (state) => {
      state.products.sort((a, b) => b.title.localeCompare(a.title));
    },
    search: (state, action) => {
      state.products = state.allProducts.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase().trim())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.products = action.payload;
      state.allProducts = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(delProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    });
  },
});
export const { sorthigh, sortlow, search } = productSlice.actions;
export default productSlice.reducer;
