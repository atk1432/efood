import { useState, useRef } from 'react'
import Angle from './Angle';
import Banners from './Banners';
import styles from '../../Asset/Css/Body.module.css';


function Slider() {

    const [ dispatch, setDispatch ] = useState();

    return (
        <div className={ styles.Slider }>
            <Angle 
                direction='left'
                left={10}
                onClick={() => {
                    dispatch[0]({ type: 'left' }) 
                }}
            />
            <Banners 
                setDispatch={setDispatch} 
            />
            <Angle 
                direction='right' 
                right={10}
                onClick={() => {
                    dispatch[0]({ type: 'right' }) 
                }}
            />
        </div>
    );
}

export default Slider;