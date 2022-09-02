import { Link } from 'react-router-dom';
import ToVND from '../../../Utilities/ConvertToVND';


function ProductItem(props) {

    return (
        <div className="col col-12 bg-light rounded mb-3">
            <div className="row g-0">    
                <div className="col col-4 d-flex align-items-center">
                    <img src={ props.image } alt="" className="w-100" />
                </div>
                <div className="col col-8 p-2">
                    <Link to={`/products/${props.id}`} className="d-block mb-1 text-decoration-underline">
                        { props.name }
                    </Link>
                    <div className="mb-1">Tiền gốc: { ToVND(props.price) }</div>
                    <p>Số lượng: { props.amount }</p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;