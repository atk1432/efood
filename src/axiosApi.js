import axios from 'axios';
import Cookies from 'js-cookie';


axios.interceptors.request.use(function (config) {
        
    var sid = Cookies.get('_sid');

    if (sid) {
        config.headers.Authorization = 'Bearer ' + sid; 
    }

    return config;
});


export default axios;