import { Link } from 'react-router-dom';
import Brand from '../Header/Brand';
import axios from '../axiosApi';


function Button(props) {

    return (
        <div 
           className={props.className + ' rounded-pill p-3 mb-3 fs-5 w-100 d-flex align-items-center cursor-pointer'}
           onClick={props.onClick}
        >
            <img src={ props.src } alt="" style={{
                width: 30,
                marginRight: 10
            }} />
            { props.children }            
        </div>
    );
}


function Login() {

    return (
        <div 
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: 'url("/background.jpeg")'
            }}
        >   
            <div className="d-flex align-items-center flex-column">
                <div style={{
                    height: 100,
                    marginBottom: 15
                }}>
                    <Brand />
                </div>
                <Button 
                    className="bg-light"
                    src="/icons8-google.svg"
                    onClick={() => {
                        axios.get('/auth/google/redirect')
                            .then((response) => {
                                window.location.href = response.data.redirect_uri;
                            });
                    }}
                >
                    Đăng nhập với Google
                </Button>
                <Button 
                    className="bg-primary text-light"
                    src="/icons8-facebook.svg"
                >
                    Đăng nhập với Facebook
                </Button>
            </div>
        </div>
    );
}

export default Login;