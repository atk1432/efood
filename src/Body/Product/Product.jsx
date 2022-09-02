import { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../Share/Image';
import Text from '../../Share/Text';
import Price from '../Section/Price';
import styles from '../../Asset/Css/Body.module.css';
import Button from '../../Share/Button';
import StarsReview from './StarsReview';
import axios from '../../axiosApi';
import { fetchNumberCarts } from '../../Redux/carts';
import store from '../../Redux/storeUser';

const initialValues = {
    bgColor: 'var(--bs-primary)',
    info: <>Thêm vào giỏ hàng</>,
    getted: false,
    getting: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "GETTING":
            // get data
            action.fetch();

            return { 
                ...state, 
                getting: true,
                info: <div className="spinner-border" role="status"></div> 
            };

        case "GETTED":
            store.dispatch(fetchNumberCarts())

            return {
                bgColor: 'var(--bs-success)',
                getted: true,
                getting: false,
                info: <>Đã thêm vào giỏ hàng</>
            };

        default:
            throw new Error;

    }
}


// For get 1 data
function Product(props) {

    const [ status, dispatch ] = useReducer(reducer, initialValues);
    const data = props.data;

    useEffect(() => {

        axios.get(`/carts/${data.id}`)
            .then(response => {
                if (response.data.length !== 0)
                    dispatch({ type: "GETTED" });
            }).catch(error => {})


    }, [])

    return (
        <>
            <div className="col col-md-6 col-12 mb-4">
                <Image width={'100%'} radius={16} src={ data.image } />
            </div>
            <div className="col col-md-6 col-12">
                <div className={styles.ProductInfo + ' m-0 p-0'}>
                    <Text 
                        display='block' 
                        size={34} 
                        weight={600}
                    >
                        { data.name }
                    </Text>
                    <Text display="block" opacity={0.7} mt={6} size={18}>   
                        { data.types.join(' - ') }
                    </Text>
                    <div style={{ margin: '12px 0' }}>
                        <Text className={styles.ProductInfo__Rate}>
                            {parseInt(data.rate) !== 0 ?
                                <>
                                    <StarsReview rate={ data.rate } />
                                    { data.rate } 
                                </> : <i>Chưa có đánh giá</i>
                            }
                        </Text>
                        <br />                       
                    </div>
                    <Price size={34}>
                        {new Intl.NumberFormat(
                            'vi-VI', 
                            { style: 'currency', currency: 'VND' }
                        ).format( data.price )}
                    </Price>
                    <Button 
                        className='mt-3'
                        bgColor={ status.bgColor }
                        onClick={() => {
                            if (!status.getted) {
                                dispatch({ 
                                    type: "GETTING",
                                    fetch: () => {
                                        axios.post('/carts', {
                                            product_id: data.id
                                        }).then(response => dispatch({ type: "GETTED" }))
                                    }
                                })
                            }
                        }}
                    >
                        {status.getted ?
                            <i className="fa-solid fa-check me-2"></i> : 
                            (!status.getting ?
                                <i 
                                className="fa-solid fa-cart-shopping me-2"
                                ref={props._ref}
                            ></i> : <></>)
                        }
                        { status.info }
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Product;