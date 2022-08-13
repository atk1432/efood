import Image from '../../Share/Image';
import Text from '../../Share/Text';
import styles from '../../Asset/Css/Body.module.css';


function ProductsLoading() {

    return (
        <div className={
            styles.Product + ' placeholder-glow'
        }>
            <Image className="placeholder" width={'100%'} height={138} />
            <div className="mt-2">
                <a href="" style={{
                    color: '#333'
                }}>
                    <Text 
                        className={
                            'placeholder'
                        } 
                        display='block' 
                        size={22} 
                        weight={600}
                    >
                    </Text>
                </a>
                <Text 
                    display="block"   
                    mt={6} 
                    size={15}
                    className="placeholder w-75"
                >
                </Text>
                <div >
                    <Text className="placeholder w-25">
                    </Text>
                </div>
                <Text className="placeholder w-50">
                </Text>
            </div>
        </div>
    );
}

export default ProductsLoading;