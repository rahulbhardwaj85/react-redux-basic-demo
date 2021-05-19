import { createSlice } from '@reduxjs/toolkit';

const initialSelectedProductState = {
    selectedProduct: [],
    totalAmount: 0,
    isShowingCart: false
}

const selectedProductSlice = createSlice({
    name: 'selectedProduct',
    initialState: initialSelectedProductState,
    reducers: {
        addProduct(state, action) {

            const itemIndex = state.selectedProduct.map(e => e.id).indexOf(action.payload.id);
            const updateItem = state.selectedProduct[itemIndex];
            if (updateItem) {

                const updated_Item = {
                    ...updateItem,
                    ammount: updateItem.ammount + 1,
                    total: updateItem.total + action.payload.price
                }
                state.selectedProduct[itemIndex] = updated_Item;
                
                state.totalAmount = state.totalAmount + action.payload.price
            } else {
                state.selectedProduct.push({ ...action.payload, total: action.payload.price });
                state.totalAmount = state.totalAmount + action.payload.price
            }
        },

        removeProduct(state, action){
            const itemIndex = state.selectedProduct.map(e => e.id).indexOf(action.payload.id);
                const updateItem = state.selectedProduct[itemIndex];
                
                if (updateItem.ammount > 1) {
                    const updated_Item = {
                        ...updateItem,
                        ammount: updateItem.ammount - 1,
                        total: updateItem.total - action.payload.price
                    }
                    state.selectedProduct[itemIndex] = updated_Item;
                    
                    state.totalAmount = state.totalAmount - action.payload.price
                } else {
    
                    state.selectedProduct.splice(itemIndex);
                    state.totalAmount = state.totalAmount - action.payload.price
                }
        },
        cartVisible(state){
            state.isShowingCart = !state.isShowingCart;
        }

    }
})

export const selectedProductActions = selectedProductSlice.actions;

export default selectedProductSlice.reducer;