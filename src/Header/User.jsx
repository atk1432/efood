import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../Redux/user';
import Image from '../Share/Image';
import avatar from "../Asset/Img/avatar.jpeg";
import axios from 'axios';

 
function User() {

    const user = useSelector(state => state.user.image);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(login());
    }, [])

    console.log(user)

    return (
        <Link to="/login" className="me-3">
            { user ? 
                <Image 
                    width="60px"
                    height="60px"
                    className="float-end rounded-circle"
                    src={user.image}
                /> :
                <i className="fa-solid fa-right-to-bracket fs-2 float-end"></i> 
            }
        </Link>
    );
}


export default User;