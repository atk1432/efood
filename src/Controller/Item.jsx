import { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaInfo from '../Share/MetaInfo';
import shares from '../Asset/Css/Share.module.css';


function Item(props) {

    const [ hiddenMeta, setHiddenMeta ] = useState(true);

    const hover = () => {
        setHiddenMeta(!hiddenMeta);
    }

    return (
        <Link 
            to="/cart"
            onMouseEnter={ hover }
            onMouseLeave={ hover }
            className={ 
                `position-relative ` + props.className ?? ""
        }>
            { props.children }
            { hiddenMeta ? <></> :
                <MetaInfo 
                    left={65} 
                    top={12}
                    style={{
                        transformOrigin: 'left',
                        animation: `${shares.showMeta} 0.1s`
                    }}
                >
                    { props.metaInfo }
                </MetaInfo>
            }
        </Link>
    );
}

export default Item;