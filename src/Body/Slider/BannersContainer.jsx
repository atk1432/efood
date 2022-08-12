import { memo } from 'react';
import Banner from './Banner';


const origin = 'http://localhost:3000/';


function BannersContainer(props) {

    return (
        <>
            { 
                props.banners.map((banner, index) => {
                    return <Banner key={index} src={ origin + banner } />
                })
            }
        </>
    );
}


export default memo(BannersContainer);