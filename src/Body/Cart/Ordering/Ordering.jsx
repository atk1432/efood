import { useState, useEffect, memo } from 'react';
import OrderingItem from './OrderingItem'
import axios from '../../../axiosApi';


function Ordering() {

    const [ orders, setOrders ] = useState([]);

    useEffect(() => {

        axios.get('/orders')
            .then(response => setOrders(response.data));

    }, []);

    return (
        <div className="col col-12">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Đơn hàng</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) =>
                        <OrderingItem 
                            id={ order.id }
                            image={ order.product.image }
                        />
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default memo(Ordering);