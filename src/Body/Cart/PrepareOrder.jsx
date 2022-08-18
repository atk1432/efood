import CartItem from './CartItem';


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
            width: '90%'
        },
        {
            label: 'Last name',
            name: 'last_name',
            width: '90%'
        },
        {
            label: 'Address',
            name: 'address',
            width: '90%'
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
            <div className="col col-md-4 col-12">
                <form className="d-flex flex-wrap justify-content-center">
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
            <div className="col col-md-8 col-12 mt-3">
                <div className="row gy-3">
                    <div className="col col-12">
                        <CartItem 
                            image='https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZBYRP6KRXJCEN/hero/f6f3e83b389a4355a7e9072a55cd0fbc_1659913137408522559.jpg'
                            name="Bún gà ngon 74"
                            price={25000}
                            number={2}
                        />
                    </div>
                    <div className="col col-12">
                        <CartItem 
                            image='https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZBYRP6KRXJCEN/hero/f6f3e83b389a4355a7e9072a55cd0fbc_1659913137408522559.jpg'
                            name="Bún gà ngon 74"
                            price={25000}
                            number={2}
                        />
                    </div>
                    <div className="col col-12 my-4 d-flex justify-content-center">
                        <button className="btn btn-primary btn-lg fw-bold">Đặt hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrepareOrder;