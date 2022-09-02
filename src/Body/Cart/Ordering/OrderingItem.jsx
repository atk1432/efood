import ProductItem from './ProductItem';


function OrderingItem(props) {

    return (
        <tr>
            <th scope="row">{ props.id }</th>
            <td>
                <div className="row">
                    <div className="col col-12">
                        <ul>
                            <li className="mb-2">
                                Tình trạng: <i>{ props.status }</i>
                            </li>
                            <li className="mb-2">
                                Người đặt: { props.userInfo.firstname + ' ' + props.userInfo.lastname }
                            </li>
                            <li className="mb-2">
                                Số điện thoại: { props.userInfo.phone }
                            </li>
                            <li className="mb-2">
                                Địa chỉ: { props.userInfo.address }
                            </li>
                            <li className="mb-2">
                                Thông tin cho shipper: { props.userInfo.info_for_shipper }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row g-0">
                    {props.products.map((product, index) => 
                        <ProductItem 
                            key={ index }
                            id={ product.id }
                            image={ product.image } 
                            name={ product.name }
                            price={ product.price }
                            amount={ product.amount } 
                        />
                    )}
                </div>
            </td>
        </tr>
    );
}

export default OrderingItem;