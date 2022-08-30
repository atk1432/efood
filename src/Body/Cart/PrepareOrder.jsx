import { useState, useEffect, useContext, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { init } from '../../Redux/counterPrice';
import CartItem from './CartItem';
import ToVND from '../../Utilities/ConvertToVND';
import Price from '../Section/Price';
import { SectionContext } from './Cart';
import axios from '../../axiosApi';


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
        name: 'firstName',
        width: '90%'
    },
    {
        label: 'Tên',
        name: 'lastName',
        width: '90%'
    },
    {
        label: 'Số điện thoại',
        name: 'phone',
        width: '90%'
    },
    {
        label: 'Địa chỉ',
        name: 'address',
        width: '90%'
    },
    {
        label: 'Thông tin cho shipper',
        name: 'info',
        textarea: true,
        width: '90%',
        noWeight: true
    }
];

const InputContainer = memo(() => 
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
)


function PrepareOrder() {

    const dispatch = useDispatch();

    const [ dataset, setDataset ] = useState([]);

    const { setCurrent } = useContext(SectionContext);

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
            <InputContainer />
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