import {createSlice} from '@reduxjs/toolkit';

const initialProductsState = {
    items : [{
        id:'a1',
        title:'Test',
          price:6,
          description:'This is a first product - amazing!'
    },
    {
        id:'a2',
        title:'Test-2',
          price:7,
          description:'This is a second product - great!'
    },
    {
        id:'a3',
        title:'Test-3',
          price:3,
          description:'This is a first product - nice!'
    }]
}

const productSlice = createSlice({
    name:'product',
    initialState:initialProductsState,
    reducers:{

    }
});

export const productAction = productSlice.actions;
export default productSlice.reducer;