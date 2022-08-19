import { createSlice } from '@reduxjs/toolkit';


export const counterPrice = createSlice({
    name: 'counterPrice',
    initialState: {
        value: [],
        // total: []
    },
    reducers: {
        init: (state, action) => {
            state.value = action.payload;
        },
        change: (state, action) => {
            var { index, price } = action.payload;
            state.value[index] = parseInt(price);
        }
    }
})

export const { change, init } = counterPrice.actions;

export default counterPrice.reducer;