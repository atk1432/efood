import { Link } from 'react-router-dom';
import Image from '../../Share/Image';
import Text from '../../Share/Text';
import Price from './Price';
import styles from '../../Asset/Css/Body.module.css';


function Product(props) {

    return (
        <div className={
            'row'
        }>
            <Image width={'100%'} radius={16} src={ props.image } />
            <div className={styles.ProductInfo}>
                <Link to={ `/product/${props.id}` }>
                    <Text 
                        className={
                            styles.ProductInfo__Name + ' text-truncate'
                        } 
                        display='block' 
                        size={22} 
                        weight={600}
                    >
                        { props.name }
                    </Text>
                </Link>
                <Text display="block" opacity={0.7} mt={6} size={15}>
                    { props.types.join(' - ') }
                </Text>
                <div style={{ margin: '12px 0' }}>
                    <Text className={styles.ProductInfo__Rate}>
                        <i className="fa-solid fa-star text-warning"></i>
                        { props.rate }
                    </Text>
                    <Text 
                        className={styles.ProductInfo__Rate}
                        opacity={0.8}
                    >
                        <i className="fa-regular fa-clock"></i>
                        { props.time } phút
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
                        { props.distance } km
                    </Text>
                </div>
                <Price>
                    {new Intl.NumberFormat(
                        'vi-VI', 
                        { style: 'currency', currency: 'VND' }
                    ).format( props.price )}
                </Price>
            </div>
        </div>
    );
}

export default Product;