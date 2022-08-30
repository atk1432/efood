import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { init } from '../../Redux/counterPrice';
import CartItem from './CartItem';
import ToVND from '../../Utilities/ConvertToVND';
import Price from '../Section/Price';
import { SectionContext } from './Cart';


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


function Total() {

    const count = useSelector(state => state.counterPrice.value);

    return (
        <div className="col col-12 mt-2 d-flex align-items-center">
            <span className="fw-bold me-2">
                Tổng cộng: 
            </span>
            <Price>
                { ToVND(count.reduce((total, data) => total + data, 0)) }
            </Price>
        </div>
    );
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
    ];

    const dispatch = useDispatch();

    const [ dataset, setDataset ] = useState([
        {
            image: 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZBYRP6KRXJCEN/hero/f6f3e83b389a4355a7e9072a55cd0fbc_1659913137408522559.jpg',
            name: "Bún gà ngon 74",
            price: 25000,
            number: 3        
        },
        {
            image: 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZBYRP6KRXJCEN/hero/f6f3e83b389a4355a7e9072a55cd0fbc_1659913137408522559.jpg',
            name: "Bún gà ngon 74",
            price: 25000,
            number: 3        
        }
    ]);

    const { setCurrent } = useContext(SectionContext);

    useEffect(() => {

        var total = dataset.map(data => 
            data.price * data.number
        );        

        // console.log(total)

        dispatch(init(total));

    }, [])

    // console.log(dataset)

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
                    {dataset.map((data, index) => 
                        <div className="col col-12" key={index}>
                            <CartItem 
                                index={ index }
                                image={ data.image }
                                name={ data.name }
                                price={ data.price }
                                number={ data.number }
                                setDataset={setDataset}
                                dataset={ dataset }
                            />
                        </div>
                    )}
                    <Total />
                    <div className="col col-12 my-4 d-flex justify-content-center">
                        <button 
                            className="btn btn-primary btn-lg fw-bold"
                            onClick={() => setCurrent(1)}
                        >
                            Đặt hàng
                        </button>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrepareOrder;