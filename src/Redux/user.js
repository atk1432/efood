import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'; 
import axios from 'axios';


export const user = createSlice({
    name: 'user',
    initialState: {
        name: null,
        email: null,
        image: null
    },
    reducers: {
        login: (state) => {
            var sid = Cookies.get('_sid');
            if (sid) {
                // axios.defaults.headers.common('Authorization', 'Bearer ' + sid);
                var config = {
                    headers: {
                        'Authorization': 'Bearer ' + sid
                    }
                }
                
                var data = {};

                data = await axios.get(window.apiOrigin + '/api/user', config)
                    .then(function (response) {
                        return response.data;
                    });

                console.log(data);

                state.image = data.image;
            }
        }
    }
})

export const { login } = user.actions;
export default user.reducer;