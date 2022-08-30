import { configureStore } from '@reduxjs/toolkit';
import carts from './carts';
import user from './user';


export default configureStore({
    reducer: {
        user,
        carts
    }
})