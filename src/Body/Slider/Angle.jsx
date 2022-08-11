import { memo } from 'react';
import styles from '../../Asset/Css/Body.module.css';


function Angle(props) {

    return (
        <i 
            onClick={ props.onClick }
            style={{ 
                top: props.top,
                left: props.left,
                right: props.right,
                bottom: props.bottom
            }}
            className={
            `fa-solid fa-angle-${props.direction} ${styles.Angle}`
            }
        >
        </i>
    );
}

export default memo(Angle);