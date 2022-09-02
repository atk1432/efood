import axios from 'axios';
import Cookies from 'js-cookie';

const blacklists = [
    'cart'
]


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
        // window.location.href = '/login
        blacklists.forEach(data => {
            if (window.location.pathname.split('/')[1] === data) {
                window.location.href = '/login';
                return;
            }
        })

    }
})


export default axios;