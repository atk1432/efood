import { useState, useEffect } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';


function GoogleCallback() {

    const [ params, setParams ] = useSearchParams();
    const [ redirect, setRedirect ] = useState(false);

    useEffect(() => {
        var code = encodeURIComponent(params.get('code'));

        axios.get(window.apiOrigin + '/api/auth/google/callback?code=' + code)
            .then((response) => {
                Cookies.set('_sid', response.data.token, { expires: 1 });
                setRedirect(true);
            })

    }, [])

    return (
        <>
            {redirect ? 
                <Navigate to="/" /> :
                <></>
            }
        </>
    );
}

export default GoogleCallback;