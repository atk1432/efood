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
                    className="alert alert-success d-inline-block mb-2" 
                    role="alert"
                    style={{
                        right: 0,
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