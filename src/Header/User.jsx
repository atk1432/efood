import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../Redux/user';
import Image from '../Share/Image';
import avatar from "../Asset/Img/avatar.jpeg";
import Cookies from 'js-cookie';
import axios from '../axiosApi';


function Info(props) {

    return (
        <>
            <div className="position-fixed top-0 end-0 bg-light d-flex flex-column align-items-center">
                <Image className="mt-3" width={100} src={props.user.image} />
                <div className="p-3 cursor-pointer">
                    <span style={{
                        fontSize: 23,
                        fontWeight: 900,
                    }}>{ props.user.name }</span>
                </div>
            </div>
            <div className="position-fixed w-100 h-100 start-0 top-0 bg-dark bg-opacity-50">
            </div>
        </>
    );
}


function User() {

    const user = useSelector(state => state.user);
    const [ showInfo, setShowInfo ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

        axios.get(window.apiOrigin + '/api/user')
            .then(response => dispatch(login({ data: response.data })))
            .catch(error => {});
        
    }, [])

    

    return (
        <>
            { avatar ? 
                <div onClick={() => setShowInfo(!showInfo)}>
                    <Image 
                        width="60px"
                        height="60px"
                        className="float-end rounded-circle"
                        src={user.image}
                    />
                    {showInfo ? 
                        <Info user={user} /> : <></>
                    }
                </div> :
                <Link to="/login" className="me-3">
                    <i className="fa-solid fa-right-to-bracket fs-2 float-end"></i> 
                </Link>
            }
        </>
    );
}


export default User;