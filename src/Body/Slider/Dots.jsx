import { useRef, useEffect, useContext, memo } from 'react'
import styles from '../../Asset/Css/Body.module.css';


function Dots(props) {

    const render = () => {
        
        return Array(props.number).fill().map((_, i) => 
            <i 
                key={i}
                onClick={() => {    
                    if (i !== props.active) {
                        props.dispatch({ index: i + 1 });
                    }
                }}
                className={
                    `${ props.active === i ? 'fa-solid' : 'fa-regular' } fa-circle`
                }
            >
            </i>
        );
    }

    const element = useRef();

    useEffect(() => {
        element.current.style.left = `calc(50% - ${element.current.offsetWidth / 2}px)`;
    }, [])

    return (
        <div 
            ref={ element }
            className={ styles.Dots }
            style={{
                bottom: 5
            }}
        >
            { render() }
        </div>
    );
}

export default memo(Dots);