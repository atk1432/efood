import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, Provider } from 'react-redux';
import storeUser from '../Redux/storeUser';
import { logout } from '../Redux/user';
import axios from '../axiosApi';
import Cookies from 'js-cookie';


function Logout() {

    const [ redirect, setRedirect ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

        axios.get('auth/logout')
            .then(response => {
                Cookies.remove('_sid', { path: '/' });
                dispatch(logout());
                setRedirect(true)
            });

    }, [])

    return (
        <>
            {redirect ?
                <Navigate to="/" /> : <></>
            }
        </>
    );
}

export default () => (
    <Provider store={storeUser}>
        <Logout />
    </Provider>
);