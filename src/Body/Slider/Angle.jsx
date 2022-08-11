import styles from '../../Asset/Css/Body.module.css';


function Angle(props) {

    return (
        <i  
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

export default Angle;