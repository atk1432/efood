import { useReducer, useEffect, memo } from 'react';
import Banner from './Banner';
import styles from '../../Asset/Css/Body.module.css';


const origin = 'http://localhost:3000/';

const banners = [
    'banner2.webp',
    'banner1.webp',
    'banner2.webp',
    'banner1.webp'
];

const getCoorCss = (index) => {
    return `calc(100% * -${index})`;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'right':
            var coor = state.index + 1;
            return { index: coor };
        case 'left':
            var coor = state.index - 1;
            return { index: coor };
        default:
            return state;
    }
}

const initialReducer = {
    index: 1
}

function Banners(props) {

    const [ banner, dispatch ] = useReducer(reducer, initialReducer);

    useEffect(() => {
        props.setDispatch([ dispatch ]);
    }, []);

    console.log(banner);

    return (
        <div className={ styles.BannersContainer }>
            <div 
                className={ styles.Banners }
                style={{
                    left: `calc(100% * -${banner.index})`
                }}
            >
                { 
                    banners.map((banner, index) => {
                        return <Banner key={index} src={ origin + banner } />
                    })
                }
            </div>
        </div>
    );
}

export default memo(Banners);