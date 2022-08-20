import { Link } from 'react-router-dom';
import Image from '../../Share/Image';
import Text from '../../Share/Text';
import StarsReview from '../Product/StarsReview';
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
                        <StarsReview rate={ props.rate } />
                        { props.rate }
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