import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../Redux/user';
import Image from '../Share/Image';
import avatar from "../Asset/Img/avatar.jpeg";
import Cookies from 'js-cookie';
import axios from '../axiosApi';


function InfoItem(props) {

    const [ hover, setHover ] = useState(false);

    return (
        <Link 
            to={props.src ?? ''} 
            className="p-3 d-flex w-100 justify-content-center position-relative fw-bold cursor-pointer"
            onMouseEnter={(e) => {
                e.stopPropagation();
                setHover(true)
            }}
            onMouseLeave={(e) => {
                e.stopPropagation();
                setHover(false)
            }}
            style={{
                backgroundColor: hover ? '#ccc' : '#fff'
            }}
        >
            <span 
                className="position-absolute"
                style={{
                    left: 16
                }}
            >{ props.icon }</span>
            { props.name }
        </Link>
    );
}


function Info(props) {

    const options = [
        {
            name: 'Đăng xuất',
            icon: <i className="fa-solid fa-arrow-right-from-bracket"></i>
        },
        {
            name: 'Trợ giúp',
            icon: <i className="fa-solid fa-circle-question"></i>
        }
    ]

    useEffect(() => {

        const unfocus = () => {
            props.setShowInfo(false);
        }

        window.addEventListener('click', unfocus);

        return () => {
            window.removeEventListener('click', unfocus); 
        }
    }, [])

    return (
        <div 
            className="position-absolute shadow rounded end-0 bg-white d-flex flex-column align-items-center"
            style={{
                top: '105%',
                minWidth: 200,
            }}
        >
            {options.map((option, index) => 
                <InfoItem 
                    key={index} 
                    name={option.name} 
                    icon={option.icon}  
                />
            )}
        </div>            
    );
}


function User() {

    const user = useSelector(state => state.user);
    const [ showInfo, setShowInfo ] = useState(false);
    const [ reRender, setReRender ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

        var token = Cookies.get('_sid')

        if (token) {
            axios.get('/user')
                .then(response => {
                    dispatch(login({ data: response.data }))
                }).catch(error => {
                    axios.get('/auth/refresh?token=' + token)
                        .then(response => {
                            Cookies.set('_sid', response.data.token, { expires: 1 });
                            setReRender(!reRender);
                        });
                })
        }
        
    }, [reRender])

    return (
        <>
            { user.email ? 
                <div 
                    onClick={(e) => {
                        e.stopPropagation()
                        setShowInfo(!showInfo)
                    }}
                    className="position-relative cursor-pointer"
                >
                    <Image 
                        width="50px"
                        height="50px"
                        className="float-end rounded-circle"
                        src={user.image}
                    />
                    {showInfo ? 
                        <Info user={user} setShowInfo={setShowInfo} /> : <></>
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