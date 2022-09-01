import { configureStore } from '@reduxjs/toolkit';
import carts from './carts';
import user from './user';
import log from './log';


export default configureStore({
    reducer: {
        user,
        carts,
        log,
    }
})