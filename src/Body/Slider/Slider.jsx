import { useState, useRef } from 'react'
import Angle from './Angle';
import Banners from './Banners';
import styles from '../../Asset/Css/Body.module.css';


function Slider() {

    const [ dispatch, setDispatch ] = useState();
    const interval = useRef();

    return (
        <div className={ styles.Slider }>
            <Angle 
                direction='left'
                left={10}
                onClick={() => {
                    clearInterval(interval.current);
                    dispatch[0]({ type: 'left' }) 
                }}
            />
            <Banners 
                setDispatch={setDispatch} 
                interval={interval}
            />
            <Angle 
                direction='right' 
                right={10}
                onClick={() => {
                    clearInterval(interval.current);
                    dispatch[0]({ type: 'right' }) 
                }}
                interval={interval}
            />
        </div>
    );
}

export default Slider;