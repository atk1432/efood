import { configureStore } from '@reduxjs/toolkit';
import counterPrice from './counterPrice';


export default configureStore({
    reducer: {
        counterPrice
    }
})