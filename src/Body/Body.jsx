import {
    FooterContainer ,
} from './Container';
import { Outlet } from 'react-router-dom';
import ContainerMd from '../Share/ContainerMd';
import styles from '../Asset/Css/Body.module.css';


function Body(props) {

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