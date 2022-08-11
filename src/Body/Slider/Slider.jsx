import { useRef } from 'react'
import Angle from './Angle';
import Dots from './Dots';
import Banners from './Banners';
import styles from '../../Asset/Css/Body.module.css';


function Slider() {

    return (
        <div className={ styles.Slider }>
            <Angle 
                direction='left'
                left={5}             
            />
            <Banners />
            <Dots number={4} />           
            <Angle 
                direction='right' 
                right={5}
            />
        </div>
    );
}

export default Slider;