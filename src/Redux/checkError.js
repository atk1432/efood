import { createSlice } from '@reduxjs/toolkit';


const checkError = createSlice({
    name: 'createSlice',
    initialState: {
        check: [ false, false, false, false ],
        render: false
    },
    reducers: {
        success: (state, action) => {
            var id = action.payload.id;
            state.check[id] = true;
            state.render = !state.render;
        },

        fail: (state, action) => {
            var id = action.payload.id;
            state.check[id] = false;
            state.render = !state.render;
        },

        reset: state => {
            state.check = [ false, false, false, false ];
        }
    }
});

export const { success, fail, reset } = checkError.actions;

export default checkError.reducer;