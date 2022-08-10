import ContainerMd from '../Share/ContainerMd';
import Slider from './Slider/Slider';
import styles from '../Asset/Css/Body.module.css';


function Body() {

    return (
        <div className={styles.Body}>
            <Slider />
        </div>
    );
}

export default Body;