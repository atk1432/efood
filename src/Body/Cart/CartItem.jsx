import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change, init } from '../../Redux/counterPrice';
import { Link } from 'react-router-dom';
import Image from '../../Share/Image';
import Price from '../Section/Price';
import Text from '../../Share/Text';
import ToVND from '../../Utilities/ConvertToVND';


function CaculatePrice(props) {

    const [ number, setNumber ] = useState(props.number);

    // const count = useSelector(state => state.counterPrice.value);
    const dispatch = useDispatch();

    return (
        <div className="d-flex align-items-center mt-2 flex-wrap">
            <Text size={15} className="mt-1">
                { ToVND(props.price) }
            </Text>
            <Text size={15} className="mx-2">
                x
            </Text>
            <input 
                type="number" 
                style={{ width: 50 }} 
                value={ number } 
                onChange={(e) => {
                    if (e.target.value < 0)
                        return;

                    dispatch(change({
                        price: e.target.value * parseInt(props.price),
                        index: props.index
                    }));
                    setNumber(e.target.value)
                }}
            />
            <Text size={15} className="mx-2">
                =
            </Text>
            <Price>{ ToVND(number * props.price) }</Price>
        </div>
    );
}


function CartItem(props) {

    const dispatch = useDispatch();

    return (
        <div className="row gx-2 bg-light p-2">
            <div className="col col-3">
                <Image 
                    src={props.image} 
                    width={'100%'} 
                    radius={10}
                />
            </div>
            <div className="col col-8 ">                
                <Link 
                    to=""
                    className="text-truncate"
                    style={{
                        color: '#333',
                        display: 'block',
                        fontWeight: 900
                    }}
                >
                    { props.name }
                </Link>
                <CaculatePrice 
                    price={props.price} 
                    number={props.number} 
                    index={props.index}
                />
            </div>
            <div className="col col-1 d-flex align-items-center">
                <i 
                    className="fa-solid fa-xmark cursor-pointer fs-5"
                    onClick={() => {
                        var dataset = [...props.dataset];
                        dataset.splice(props.index, 1);

                        dispatch(init( dataset.map(data => data.number * data.price) ));
                        props.setDataset(dataset);

                    }}
                ></i>
            </div>
        </div>
    ); 
}

export default CartItem;