import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Image from '../../Share/Image';
import Text from '../../Share/Text';
import Price from '../Section/Price';
import styles from '../../Asset/Css/Body.module.css';
import Button from '../../Share/Button';
import StarsReview from './StarsReview';


// For get 1 data
function Product() {

    const params = useParams();
    const [ data, setData ] = useState({
        name: 'Phở Gà Ngon 47',
        types: [ 'Bún', 'Phở', 'Cháo, Tạp Dế Bạc' ],
        image: 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZBYRP6KRXJCEN/hero/f6f3e83b389a4355a7e9072a55cd0fbc_1659913137408522559.jpg',
        rate: 4.5,
        time: 25, // Minute 
        distance: 0.5, // Km
        price: 25000
    });


    return (
        <>
            <div className="col col-md-6 col-12 mb-4">
                <Image width={'100%'} radius={16} src={ data.image } />
            </div>
            <div className="col col-md-6 col-12">
                <div className={styles.ProductInfo + ' m-0'}>
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
                        <i className="fa-solid fa-cart-shopping me-2"></i>
                        Thêm vào giỏ hàng
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Product;