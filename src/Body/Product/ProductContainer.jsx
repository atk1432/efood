import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeUser from '../../Redux/storeUser';
import Product from './Product';
import ProductLoading from './/ProductLoading';
import Description from './Description';
import Comments from './Comments';
import { apiOrigin } from '../../config';
import axios from '../../axiosApi';


function ProductContainer() {

    const params = useParams();
    const [ data, setData ] = useState({});
    const [ loaded, setLoaded ] = useState(false);
    const buttonElement = useRef();

    useEffect(() => {
        
        axios.get('/products/' + params.id)
            .then(function (response) {
                setLoaded(true);
                setData(response.data);
                // console.log(response.data)
            });

    }, [])

    return (
        loaded ? 
            <>
                <Product data={data} _ref={buttonElement} /> 
                <Description _ref={buttonElement}>
                    { data.description }
                </Description> 
                <Comments 
                    productId={data.id} 
                    comments={data.comments}
                />
            </> :
            <ProductLoading />
    )
}

export default ProductContainer;