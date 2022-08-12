import { useReducer, useRef, useEffect, memo } from 'react';
import BannersContainer from './BannersContainer';
import Dots from './Dots';
import styles from '../../Asset/Css/Body.module.css';


const banners = [
    'banner2.webp',
    'banner1.webp',
    'banner3.webp',
    'banner2.webp',
    'banner1.webp'
];

var disable = false;

const reducer = (state, action) => {

    if (!disable) {
        disable = true;

        setTimeout(() => {
            disable = false;
        }, 1000);

        switch (action.type) {
            case 'right':
                var coor = state.index + 1;
                // if (coor >= banners.length - 1) coor = 1;
                return { index: coor };
            case 'left':
                var coor = state.index - 1;
                // if (coor < 1) coor = banners.length - 2; 
                return { index: coor };
            default:
                return { index: action.index };
        }
    } else {
        return state;
    }
}

const initialReducer = {
    index: 1
}

const dotsActive = (active) =>  {
    if (active < 0) {
        return banners.length - 3 
    } else if (active >= banners.length - 2) {
        return 0;
    } else {
        return active;
    }
}

function Banners(props) {

    const [ banner, dispatch ] = useReducer(reducer, initialReducer);
    // const [ noTransition, setNoTransition ] = useState(false);
    const noTransition = useRef(false);

    useEffect(() => {
        props.setDispatch([ dispatch ]);

        props.interval.current = setInterval(() => {
            dispatch({ type: 'right' });
        }, 5000);

    }, []);

    useEffect(() => {
        noTransition.current = false;
    }, [noTransition.current])

    return (
        <>
            <div className={ styles.BannersContainer }>
                <div 
                    className={ 
                        styles.Banners + ' ' + (
                            noTransition.current ? 'notransition' : ''
                        )
                    }
                    style={{
                        left: `calc(100% * -${banner.index})`
                    }}
                    onTransitionEnd={() => {
                        var condition1 = banner.index === 0;
                        var condition2 = banner.index >= banners.length - 1;
                        if (condition1 || condition2) {
                        
                            // setNoTransition(true);
                            noTransition.current = true;

                            if (condition1) {
                                dispatch({ index: banners.length - 2 });
                            } else if (condition2) {
                                dispatch({ index: 1 });
                            }
                            
                        } 
                    }}
                >
                    <BannersContainer banners={banners} />
                </div>
            </div>
            <Dots 
                number={ banners.length - 2  }
                active={ dotsActive(banner.index - 1) }
                dispatch={ dispatch }
            />
        </>
    );
}

export default memo(Banners);