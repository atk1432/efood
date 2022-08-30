import { createSlice } from '@reduxjs/toolkit';


export const log = createSlice({
    name: 'log',
    initialState: {
        stack: []
    },
    reducers: {
        push: (state, action) => {
            state.stack.push(action.payload);
        },

        shift: (state, action) => {
            state.stack.shift();
        }
    } 
});

export const { push, shift } = log.actions;

export default log.reducer;