import { createAsyncThunk, createSlice, configureStore } from '@reduxjs/toolkit';
import axios from '../axiosApi';


export const fetchNumberCarts = createAsyncThunk(
    'carts/fetchApi',
    async () => {
        const response = await axios.get('/carts-amount');
        return response.data;
    }
)

const carts = createSlice({
    name: 'carts',
    initialState: {
        numbers: 0
    },
    extraReducers: builder => {
        builder.addCase(fetchNumberCarts.fulfilled, (state, action) => {
            state.numbers = action.payload;
        });
    }
})

// export default configureStore({
//     reducer: {
//         carts: carts.reducer
//     }
// })
export default carts.reducer;