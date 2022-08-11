import styles from '../../Asset/Css/Body.module.css';


function Banner(props) {

    return (
        <img className={styles.Banner} src={props.src} atl="" />
    );
}

export default Banner;