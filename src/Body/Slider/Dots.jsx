import { useRef, useEffect, useState } from 'react'
import styles from '../../Asset/Css/Body.module.css';


function Dots(props) {

    const render = () => {
        var output = [];

        for (var i = 0; i < props.number; i++) {
            output.push(
                <i key={i} className="fa-solid fa-circle"></i>
            );
        }

        return output;
    }


    // const [ element, setElement ] = useState();
    const element = useRef();

    useEffect(() => {
        element.current.style.left = `calc(50% - ${element.current.offsetWidth / 2}px)`;
    }, [element.current])


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

export default Dots;