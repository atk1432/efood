import Image from '../../Share/Image';
import Text from '../../Share/Text';


function Product() {

    return (
        <div className="Product">
            <Image width={200} height={200} />
            <div className="ProductInfo">
                <Text>
                    Something
                </Text>
            </div>
        </div>
    );
}

export default Product;