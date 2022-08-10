import Angle from './Angle';
import Dots from './Dots';
import Banners from './Banners';
import styles from '../../Asset/Css/Body.module.css';


function Slider() {

    return (
        <div className={ styles.Slider }>
            <Angle direction='left' />
            <Banners />
            <Dots number={4} />           
            <Angle direction='right' />
        </div>
    );
}

export default Slider;