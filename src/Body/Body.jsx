import ContainerXxl from '../Share/ContainerXxl';
import ContainerMd from '../Share/ContainerMd';
import Slider from './Slider/Slider';
import Section from './Section/Section';
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
            <ContainerMd>
                <Section />
            </ContainerMd>
        </div>
    );
}

export default Body;