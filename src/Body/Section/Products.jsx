import { useState, useEffect } from 'react';
import Product from './Product';
import ProductLoading from './ProductLoading';
import { apiOrigin } from '../../config';
import axios from 'axios';


function Products() {

    const [ dataset, setDataset ] = useState([]);

    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        
        axios.get(apiOrigin + '/api/products')
            .then(function (response) {
                setLoaded(true);
                setDataset(response.data);
            })

    }, [])

    return (
        <>  
            {loaded ?
                dataset.map((data, index) => 
                    <div 
                        key={index} 
                        className="col col-xxl-3 col-xl-3 col-lg-4 col-6"
                    >
                        <Product
                            id={ index }
                            name={ data.name }
                            types={ ['sdfsdfsd'] }
                            image={ data.image }
                            rate={ data.rate }
                            // time={ data.time }
                            // distance={ data.distance }
                            price={ data.price }
                        /> 
                    </div>
                ) :
                Array(4).fill(0).map((item, index) => 
                    <div 
                        key={index} 
                        className="col col-xxl-3 col-xl-3 col-lg-4 col-6"
                    >
                        <ProductLoading />
                    </div>
                )
            }
        </>
    );
}

export default Products;