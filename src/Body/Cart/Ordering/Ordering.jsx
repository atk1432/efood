import { useState, useEffect, memo } from 'react';
import OrderingItem from './OrderingItem'
import axios from '../../../axiosApi';


function Ordering() {

    const [ orders, setOrders ] = useState([]);

    useEffect(() => {

        axios.get('/orders?status=1')
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
                            key={ index }
                            id={ order.id }
                            createdAt={ order.createdAt }
                            products={ order.products }
                            status={ order.status }
                            userInfo={ order.user_info }
                        />
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default memo(Ordering);