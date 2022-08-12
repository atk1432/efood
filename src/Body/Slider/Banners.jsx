import { useReducer, useState, useRef, useEffect, memo } from 'react';
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

const sensitive = 30;

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
    const [ reRender, setReRender ] = useState(false);
    const interval = useRef();
    const noTransition = useRef(false);


    // For process mouse
    const hold = useRef(false);
    const clientX = useRef();
    const bannersElement = useRef();


    useEffect(() => {
        props.setDispatch([ dispatch ]);


    }, []);

    // useEffect(() => {
    //     clearInterval(interval.current);

    //     interval.current = setInterval(() => {
    //         dispatch({ type: 'right' });
    //     }, 5000);
    // });

    // useEffect(() => {
    //     setTimeout(() => {
    //         bannersElement.current.style.transition = 'left 1s ease';
    //     }, 500)
    // }, [clientX.current])

    useEffect(() => {
        noTransition.current = false;
    }, [noTransition.current])

    return (
        <>
            <div className={ styles.BannersContainer }>
                <div 
                    ref={ bannersElement }
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
                    onMouseDown={(e) => {
                        hold.current = true;
                        clientX.current = e.clientX;
                    }}
                    onMouseUp={(e) => {
                        hold.current = false;
                        var coor = e.clientX - clientX.current;

                        if (coor > sensitive) {
                            dispatch({ type: 'left' });
                        } else if (coor < -1 * sensitive) {
                            dispatch({ type: 'right' });
                        } else {
                            // dispatch({ index: banner.index });
                            // setReRender(!reRender);
                            bannersElement.current.style.left = 
                                `calc(100% * -${banner.index})`;
                        }

                        bannersElement.current.style.transition = 'left 1s ease';
                        // bannersElement.current.style.transform = '';
                    }}
                    onMouseMove={(e) => {
                        if (hold.current) {
                            // bannersElement.current.style.transform = 
                            //     `translateX( ${e.clientX - clientX.current}px )`;
                            // console.log(e.clientX - clientX.current)
                            bannersElement.current.style.transition = ''
                            bannersElement.current.style.left = 
                                `calc(100% * -${banner.index} + ${e.clientX - clientX.current}px )`;
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