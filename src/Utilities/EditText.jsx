import { useState, useEffect, useContext, createContext } from 'react';
import styles from '../Asset/Css/Edit.module.css';


const focusContext = createContext();

function Line(props) {

    const [ value, setValue ] = useState('');

    console.log(props.keypress);

    useEffect(() => {
        if (props.keypress === 'true') {
            window.onkeypress = (e) => {
                console.log(e.key);
            }
        }
    })

    return (
        <>
            {value ? value : (props.placeholder ?? '') }
        </>
    )
}


function EditText(props) {

    const [ lines, setLines ] = useState([ 
        <Line placeholder={props.placeholder} /> 
    ]);
    
    const [ row, setRow ] = useState(0);

    return (
        <focusContext.Provider value={props.focus}>
            {
                lines.map((line, index) => 
                    <div 
                        key={index}
                        keypress={row === index ? 'true' : 'false'}
                    >
                        { line }
                    </div>
                )
            }
        </focusContext.Provider>
    );
}

export default EditText;