import {
    SliderContainer, 
    SectionContainer, 
    FooterContainer ,
} from './Container';
import styles from '../Asset/Css/Body.module.css';


function Body() {

    return (
        <div className={styles.Body}>
            <SliderContainer />
            <SectionContainer />
            <FooterContainer />
        </div>
    );
}

export default Body;