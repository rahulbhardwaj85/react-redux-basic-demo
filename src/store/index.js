import {configureStore} from '@reduxjs/toolkit';
import productSlice from '../store/products-slice';
import selectedProductSlice from '../store/selected-product-slice';

const store = configureStore({
    reducer:{
        products:productSlice,
    selectedProduct:selectedProductSlice
}
})

export default store;