import ContainerXxl from '../Share/ContainerXxl';
import Slider from './Slider/Slider';
import styles from '../Asset/Css/Body.module.css';


function Body() {

    return (
        <div className={styles.Body}>
            <ContainerXxl 
                classContainer='gx-0'
                classRow='m-0'
            >
                <div className="col gx-0">
                    <Slider />
                </div>
            </ContainerXxl>
        </div>
    );
}

export default Body;