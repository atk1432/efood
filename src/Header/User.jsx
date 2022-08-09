import { useState } from 'react';
import Image from '../Share/Image';
import avatar from "../Asset/Img/avatar.jpeg";

 
function User() {

    const [ isLogin, setIsLogin ] = useState(false);

    return (
        <a href="">
            { isLogin ? 
                <Image 
                    width="60px"
                    height="60px"
                    className="float-end rounded-circle"
                    src={avatar}
                /> :
                <i className="fa-solid fa-right-to-bracket fs-2 float-end"></i> 
            }
        </a>
    );
}


export default User;