import axios from 'axios';
import Cookies from 'js-cookie';


axios.interceptors.request.use(function (config) {
        
    var sid = Cookies.get('_sid');

    if (sid) {
        config.headers.Authorization = 'Bearer ' + sid; 
    }
    
    config.baseURL = 'http://127.0.0.1:8000/api';

    return config;
})

axios.interceptors.response.use(function (response) {
    return response;

}, function (error) {
    
    if (error.response.status == 401) {
        // var token = Cookies.get('_sid');

        // axios.get('/auth/refresh?token=' + token)
        //     .then(response => {
        //         Cookies.set('_sid', response.data.token, { expires: 1 });
        //     });

    }
})


export default axios;