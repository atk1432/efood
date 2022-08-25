import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'; 


export const user = createSlice({
    name: 'user',
    initialState: {
        name: null,
        email: null,
        image: null
    },
    reducers: {
        login: (state, action) => {
            // console.log(action.payload);
            var { name, email, image } = action.payload.data;
            state.name = name;
            state.email = email;
            state.image = image;
        }
    }
})

export const { login } = user.actions;
export default user.reducer;