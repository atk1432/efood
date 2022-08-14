import {
    FooterContainer ,
} from './Container';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ContainerMd from '../Share/ContainerMd';
import styles from '../Asset/Css/Body.module.css';


function Body(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className={styles.Body}>
            {props.container ?
                <ContainerMd className="container-body">
                    <Outlet />
                </ContainerMd> :
                <Outlet />
            }
            <FooterContainer />
        </div>
    );
}

export default Body;