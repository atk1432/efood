import { Link } from 'react-router-dom';
import Image from '../../Share/Image';
import Text from '../../Share/Text';
import Price from '../Section/Price';
import styles from '../../Asset/Css/Body.module.css';
import Button from '../../Share/Button';
import StarsReview from './StarsReview';


// For get 1 data
function Product(props) {

    const data = props.data;

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
                            <StarsReview rate={ data.rate } />
                            { data.rate }
                        </Text>
                        <br />
                        <Text 
                            className={styles.ProductInfo__Rate}
                            opacity={0.8}
                        >
                            <i className="fa-regular fa-clock"></i>
                            { data.time } phút
                        </Text>
                        <Text 
                            className={styles.ProductInfo__Rate}
                            opacity={0.8}
                        >
                            <i 
                                className="fa-solid fa-circle"
                                style={{
                                    fontSize: 7,
                                    transform: 'translateY(-3px)'
                                }}
                            ></i>
                            { data.distance } km
                        </Text>
                    </div>
                    <Price size={34}>
                        {new Intl.NumberFormat(
                            'vi-VI', 
                            { style: 'currency', currency: 'VND' }
                        ).format( data.price )}
                    </Price>
                    <Button className='mt-3'>
                        <i 
                            className="fa-solid fa-cart-shopping me-2"
                            ref={props._ref}
                        ></i>
                        Thêm vào giỏ hàng
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Product;