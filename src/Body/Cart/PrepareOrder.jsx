import { useState, useEffect, useContext, useRef, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { init } from '../../Redux/counterPrice';
import CartItem from './CartItem';
import ToVND from '../../Utilities/ConvertToVND';
import Price from '../Section/Price';
import { SectionContext } from './Cart';
import axios from '../../axiosApi';
import { validation } from '../../Utilities/validation';


function Input(props) {

    // console.log(props.noWeight)
    const [ value, setValue ] = useState('');
    const [ error, setError ] = useState('');

    const blur = () => {

        if (props.validation) {
            var error = '';

            for (var key in props.validation) {
                if (key === 'required') {
                    error = validation.required(value);
                } else if (key === 'max') {
                    error = validation.max(value, props.validation.max);
                } else if (key === 'phone') {
                    error = validation.phone(value);
                }

                if (error) break;
            }

            setError(error);
        }
    };

    return (
        <div 
            className="d-flex flex-column me-3 mb-3"
            style={{
                width: props.width
            }}
        >
            <label htmlFor={props.name} className="mb-2">
                { props.label } *
                <span className="text-danger ms-2">
                    { error }
                </span>
            </label>
            {!props.textarea ?
                <div className="w-100 d-flex">
                    {props.name === 'phone' ? 
                        <div className="d-flex align-items-center px-2 rounded border border-dark">
                            <img style={{
                                width: 20
                            }} src='/vietnam.png' className="mx-2" />
                            +84
                        </div> : <></>
                    }
                    <input 
                        id={props.name} 
                        name={props.name}
                        placeholder={props.label}
                        className={`${!props.noWeight ? 'fw-bold w-100' : ''} rounded`}
                        style={{
                            padding: '6px 12px',
                            border: '1px solid',
                            outline: 'none'
                        }}
                        value={value}
                        onInput={(e) => {
                            setValue(e.target.value)
                            props._ref.current[props.name] = e.target.value
                        }}
                        onBlur={blur}
                    /> 
                </div> :
                <textarea 
                    id={props.name} 
                    name={props.name}
                    placeholder={props.label}
                    className={`${!props.noWeight ? 'fw-bold' : ''} rounded`}
                    style={{
                        padding: '6px 12px',
                        border: '1px solid',
                        outline: 'none'
                    }}
                    value={value}
                    onInput={(e) => setValue(e.target.value)}
                    onBlur={blur}
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
            <span className="fw-bold me-2 fs-5">
                Tổng cộng: 
            </span>
            <Price size={26}>
                { ToVND(count.reduce((total, data) => total + data, 0)) }
            </Price>
        </div>
    );
}

const inputs = [
    {
        label: 'Họ',
        name: 'firstname',
        width: '90%',
        validation: {
            required: true,
            max: 100
        }
    },
    {
        label: 'Tên',
        name: 'lastname',
        width: '90%',
        validation: {
            required: true,
            max: 100
        }
    },
    {
        label: 'Số điện thoại',
        name: 'phone',
        width: '90%',
        validation: {
            required: true,
            phone: true,
            max: 20
        },
        example: '012345678'
    },
    {
        label: 'Địa chỉ',
        name: 'address',
        width: '90%',
        validation: {
            required: true,
            max: 100
        }
    },
    {
        label: 'Thông tin cho shipper',
        name: 'info_for_shipper',
        textarea: true,
        width: '90%',
        noWeight: true,
        validation: {
            max: 100
        }
    }
];

const InputContainer = memo((props) => 
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
                    validation={input.validation}
                    _ref={props._ref}
                />
            )}
        </form>
    </div>
)


function PrepareOrder() {

    const dispatch = useDispatch();
    const [ dataset, setDataset ] = useState([]);
    const { setCurrent } = useContext(SectionContext);
    const fields = useRef({});
    const products = useRef([]);

    useEffect(() => {


        // console.log(total)

        axios.get('/carts')
            .then(response => {
                var dataset = response.data.map(data => {
                    return {
                        id: data.id,
                        productId: data.product.id,
                        name: data.product.name,
                        image: data.product.image,
                        price: data.product.price,
                        number: 1
                    }   
                });

                products.current = dataset.map(data => {
                    return {
                        product_id: data.id,
                        amount: data.number
                    }
                })

                setDataset(dataset);

                var total = dataset.map(data => 
                    data.price * data.number
                );        
                
                dispatch(init(total));
            });


    }, [])

    // console.log(dataset)

    return (
        <div className="row">
            <InputContainer _ref={fields} />
            <div className="col col-md-8 col-12 mt-3">
                <div className="row gy-3">
                    {dataset.map((data, index) => 
                        <div className="col col-12" key={index}>
                            <CartItem 
                                index={ index }
                                id={ data.id }
                                productId={ data.productId }
                                image={ data.image }
                                name={ data.name }
                                price={ data.price }
                                number={ data.number }
                                productsRef={ products }
                                setDataset={setDataset}
                                dataset={ dataset }
                            />
                        </div>
                    )}
                    <Total />
                    <div className="col col-12 my-4 d-flex justify-content-center">
                        <button 
                            className="btn btn-primary btn-lg fw-bold"
                            disabled={dataset.length === 0 ? true : false}
                            onClick={() => {
                                var dataset = { 
                                    ...fields.current,
                                    products: products.current
                                }

                                axios.post('/orders', dataset)
                                    .then(response => console.log(response.data))
                            }}
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