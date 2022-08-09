import React from 'react';


function Image(props) {

    return (
        <img 
            style={{
                width: props.width,
                height: props.height
            }}
            src={props.src}
            className={props.className}
            alt=""
        />
    )
}

export default Image;