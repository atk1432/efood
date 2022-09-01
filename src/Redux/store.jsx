import { configureStore } from '@reduxjs/toolkit';
import counterPrice from './counterPrice';
import checkError from './checkError';


export default configureStore({
    reducer: {
        counterPrice,
        checkError
    }
})