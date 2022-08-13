import React from 'react';


function Image(props) {

    return (
        <img 
            style={{
                width: props.width,
                height: props.height,
                borderRadius: props.radius
            }}
            src={props.src}
            className={props.className}
            alt=""
        />
    )
}

export default Image;