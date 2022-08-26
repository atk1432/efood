import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'; 


export const user = createSlice({
    name: 'user',
    initialState: {
        name: null,
        email: null,
        image: null,
    },
    reducers: {
        login: (state, action) => {
            var { name, email, image } = action.payload.data;
            state.name = name;
            state.email = email;
            state.image = image;
        },

        logout: (state) => {
            state.name = null;
            state.email = null;
            state.image = null;
        },

        reRender: (state) => {
            
        }
    }
})

export const { login, logout } = user.actions;
export default user.reducer;