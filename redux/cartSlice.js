import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: [],
    },
    reducers:{
        addItem: (state,action)=>{
            // mutating the state here
            // redux toolkit uses immer library
           state.items.push(action.payload);

           /** earlier - vanilla(older) Redux
            * const newState = [...state];
            * newState.items.push(action.payload);
            * return newState;
            */

        },
        removeItem: (state) =>{
           state.items.shift();
        },
        clearCart : (state) =>{
            // RTK - either mutate the state or return a new state
           state.items.length =0;
          // console.log(current);
         // or  return {items:[]};
        },
    },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

