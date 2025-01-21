import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import productSlice from '../features/ProductSlice.js'
import basketSlice from '../features/Basket.js'
import wishlistSlice from '../features/Wishlist.js'


const persistProductConfig = {
    key: 'product',
    storage,
}

const persistBasketConfig = {
    key: 'basket',
    storage,
}
const persistWishConfig = {
    key: 'wishlist',
    storage,
}

const persistedProductReducer = persistReducer(persistProductConfig, productSlice)
const persistedBasketReducer = persistReducer(persistBasketConfig, basketSlice)
const persistedWishReducer = persistReducer(persistWishConfig, wishlistSlice)

export const store = configureStore({
    reducer: {
        products: persistedProductReducer,
        basket: persistedBasketReducer,
        wishlist: persistedWishReducer,

    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ serializableCheck: false })

})

export const persistor = persistStore(store)