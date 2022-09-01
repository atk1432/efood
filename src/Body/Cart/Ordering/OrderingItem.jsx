function OrderingItem(props) {

    return (
        <tr>
            <th scope="row">{ props.id }</th>
            <td>
                <div className="row">
                    <div className="col col-2">
                        <img src={ props.image }  atl="" />
                    </div>
                    <div className="col col-10">
                        
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default OrderingItem;