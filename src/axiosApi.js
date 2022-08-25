import axios from 'axios';
import Cookies from 'js-cookie';


axios.interceptors.request.use(function (config) {
        
    var sid = Cookies.get('_sid');

    if (sid) {
        config.headers.Authorization = 'Bearer ' + sid; 
        config.baseURL = 'http://127.0.0.1:8000/api'
    }

    return config;
});


export default axios;