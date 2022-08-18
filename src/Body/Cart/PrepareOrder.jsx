function Input(props) {

    // console.log(props.noWeight)

    return (
        <div 
            className="d-flex flex-column me-3 mb-3"
            style={{
                width: props.width
            }}
        >
            <label htmlFor={props.name} className="mb-2">
                { props.label }
            </label>
            {!props.textarea ?
                <input 
                    id={props.name} 
                    name={props.name}
                    placeholder={props.placeholder}
                    className={`${!props.noWeight ? 'fw-bold' : ''} rounded`}
                    style={{
                        padding: '6px 12px',
                        border: '1px solid',
                        outline: 'none'
                    }}
                /> :
                <textarea 
                    id={props.name} 
                    name={props.name}
                    placeholder={props.placeholder}
                    className={`${!props.noWeight ? 'fw-bold' : ''} rounded`}
                    style={{
                        padding: '6px 12px',
                        border: '1px solid',
                        outline: 'none'
                    }}
                >
                </textarea>
            }
        </div>
    )
}


function PrepareOrder() {

    const inputs = [
        {
            label: 'First name',
            name: 'first_name',
            // width: '50%'
        },
        {
            label: 'Last name',
            name: 'last_name',
            // width: '50%'
        },
        {
            label: 'Address',
            name: 'address'
        },
        {
            label: 'Info',
            name: 'info',
            textarea: true,
            width: '90%',
            noWeight: true
        }
    ]

    return (
        <div className="row">
            <div className="col col-7">
                <form className="d-flex flex-wrap">
                    {inputs.map((input, index) => 
                        <Input 
                            key={index}
                            name={input.name}
                            label={input.label}
                            width={input.width}
                            textarea={input.textarea}
                            noWeight={input.noWeight}
                        />
                    )}
                </form>
            </div>
            <div className="col col-5">
                
            </div>
        </div>
    );
}

export default PrepareOrder;