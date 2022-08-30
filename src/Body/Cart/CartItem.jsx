import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { change, init } from '../../Redux/counterPrice';
import { push, shift } from '../../Redux/log';
import { fetchNumberCarts } from '../../Redux/carts';
import storeUser from '../../Redux/storeUser';
import { Link } from 'react-router-dom';
import Image from '../../Share/Image';
import Price from '../Section/Price';
import Text from '../../Share/Text';
import ToVND from '../../Utilities/ConvertToVND';
import axios from '../../axiosApi';


function CaculatePrice(props) {

    const [ number, setNumber ] = useState(props.number);
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
                    if (e.target.value < 1)
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
                    to={ `/products/${ props.productId }` }
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
                        axios.delete(`/carts/${props.id}`)
                        .then(response => {
                            var dataset = [...props.dataset];
                            dataset.splice(props.index, 1);

                            // console.log(push)
                            storeUser.dispatch(push({ 
                                type: 'success', 
                                value: 'Đã xóa thành công'
                            }));

                            setTimeout(() => {
                                storeUser.dispatch(shift({ 
                                    type:'success',
                                }))
                            }, 3000)

                            storeUser.dispatch(fetchNumberCarts());
                            dispatch(init( dataset.map(data => data.number * data.price) ));

                            props.setDataset(dataset);
                        })
                    }}
                ></i>
            </div>
        </div>
    ); 
}

export default CartItem;