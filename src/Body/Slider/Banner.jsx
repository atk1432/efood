import styles from '../../Asset/Css/Body.module.css';


function Banner(props) {

    return (
        <img 
            className={styles.Banner + ' noselect'} 
            src={props.src}
            draggable={false}
            atl="" 
        />
    );
}

export default Banner;