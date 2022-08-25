import { useState, useRef, useEffect } from 'react';
import Product from './Product';
import ProductLoading from './ProductLoading';
import { apiOrigin } from '../../config';
import axios from '../../axiosApi';


function Products() {

    const [ dataset, setDataset ] = useState([]);
    const scrollEnter = useRef(false);
    const offset = useRef(1);
    const limit = useRef(4)
    const [ loaded, setLoaded ] = useState(false);

    const getData = (_limit) => {
        axios.get(
             '/products?offset=' + 
            offset.current + '&limit=' + (_limit || limit.current)
        ).then(function (response) {
            setLoaded(true);
            setDataset(dataset => [...dataset, ...response.data]);
        })

        offset.current += limit.current;
    }

    useEffect(() => {    

        getData();

        window.onscroll = () => {
            if (document.body.offsetHeight - window.scrollY <= window.innerHeight + 300)
            {
                if (!scrollEnter.current) {
                    scrollEnter.current = true;
                    getData();
                }
            } else {
                scrollEnter.current = false;
            }
        }

        // window.onscroll = scroll;
        
        return () => {
            window.onscroll = null;
        }

    }, [])


    useEffect(() => {
        if (document.body.offsetHeight < window.innerHeight) {
            getData(6)
        }
    })


    return (
        <>  
            {loaded ?
                dataset.map((data, index) => 
                    <div 
                        key={index} 
                        className="col col-xxl-3 col-xl-3 col-lg-4 col-6"
                    >
                        <Product
                            id={ data.id }
                            name={ data.name }
                            types={ data.types }
                            image={ data.image }
                            rate={ data.rate }
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