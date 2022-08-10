import { useState } from 'react';
import MetaInfo from '../Share/MetaInfo';
import shares from '../Asset/Css/Share.module.css';


function Item(props) {

    const [ hiddenMeta, setHiddenMeta ] = useState(true);

    const hover = () => {
        setHiddenMeta(!hiddenMeta);
    }

    return (
        <a 
            href=""
            onMouseEnter={ hover }
            onMouseLeave={ hover }
            className={ 
                `cursor-pointer ` + props.className ?? ""
        }>
            { props.children }
            { hiddenMeta ? <></> :
                <MetaInfo>
                    hello
                </MetaInfo>
            }
        </a>
    );
}

export default Item;