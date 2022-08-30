import { useState, useEffect } from 'react';


function Success(props) {

    const [ hidden, setHidden ] =  useState(false)

    useEffect(() => {

        setTimeout(() => {
            setHidden(true);
        }, 3000)

    }, [])

    return (
        <>
            {!hidden ?
                <div 
                    className="alert alert-success position-fixed" 
                    role="alert"
                    style={{
                        top: 90,
                        zIndex: 100,
                        right: 23,
                        animation: 'fadeIn 3s'
                    }}
                >
                    { props.children }
                </div> : <></>
            }
        </>
    ); 
} 

export default Success;