import Image from '../../Share/Image'; 
import Text from '../../Share/Text';
import styles from '../../Asset/Css/Body.module.css';


function ProductLoading() {

    return (
        <>
            <div className="col col-md-6 col-12 mb-4 placeholder-glow">
                <Image 
                    width={'100%'}
                    height={240}
                    className="placeholder"
                />
            </div>
            <div className="col col-md-6 col-12 placeholder-glow">
                <div className={styles.ProductInfo + ' m-0 p-0'}>
                    <Text 
                        display='block' 
                        size={34} 
                        weight={600}
                        className="placeholder w-75"
                    >
                    </Text>
                    <Text 
                        display="block" 
                        mt={6} 
                        size={18} 
                        className="placeholder w-50"
                    >
                    </Text>
                    <div style={{ margin: '12px 0' }}>
                        <Text className='placeholder w-25'>
                        </Text>
                    </div>
                    <div className='placeholder' style={{
                        width: '35%',
                        height: 30
                    }}>
                    </div>
                    <br/>
                    <div className='placeholder mt-2' style={{
                        width: '45%',
                        height: 30
                    }}>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductLoading;
