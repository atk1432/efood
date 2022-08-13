import { useState, useEffect } from 'react';
import Product from './Product';
import ProductLoading from './ProductLoading';


function Products() {

    const [ dataset, setDataset ] = useState([
        {
            name: 'Phở Gà Ngon 47',
            types: [ 'Bún', 'Phở', 'Cháo, Tạp Dế Bạc' ],
            image: 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZBYRP6KRXJCEN/hero/f6f3e83b389a4355a7e9072a55cd0fbc_1659913137408522559.jpg',
            rate: 4.4,
            time: 25, // Minute 
            distance: 0.5, // Km
            price: 25000
        },
        {
            name: 'Phở Gà Ngon 47',
            types: [ 'Bún', 'Phở', 'Cháo, Tạp Dế Bạc' ],
            image: 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZBYRP6KRXJCEN/hero/f6f3e83b389a4355a7e9072a55cd0fbc_1659913137408522559.jpg',
            rate: 4.4,
            time: 25, // Minute 
            distance: 0.5, // Km
            price: 25000
        },
        {
            name: 'Phở Gà Ngon 47',
            types: [ 'Bún', 'Phở', 'Cháo, Tạp Dế Bạc' ],
            image: 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZBYRP6KRXJCEN/hero/f6f3e83b389a4355a7e9072a55cd0fbc_1659913137408522559.jpg',
            rate: 4.4,
            time: 25, // Minute 
            distance: 0.5, // Km
            price: 25000
        },
        {
            name: 'Phở Gà Ngon 47',
            types: [ 'Bún', 'Phở', 'Cháo, Tạp Dế Bạc' ],
            image: 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZBYRP6KRXJCEN/hero/f6f3e83b389a4355a7e9072a55cd0fbc_1659913137408522559.jpg',
            rate: 4.4,
            time: 25, // Minute 
            distance: 0.5, // Km
            price: 25000
        },
        {
            name: 'Phở Gà Ngon 47',
            types: [ 'Bún', 'Phở', 'Cháo, Tạp Dế Bạc' ],
            image: 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZBYRP6KRXJCEN/hero/f6f3e83b389a4355a7e9072a55cd0fbc_1659913137408522559.jpg',
            rate: 4.4,
            time: 25, // Minute 
            distance: 0.5, // Km
            price: 25000
        }
    ]);

    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        setTimeout(() => {

            setLoaded(true);

        }, 3000);
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
                            name={ data.name }
                            types={ data.types }
                            image={ data.image }
                            rate={ data.rate }
                            time={ data.time }
                            distance={ data.distance }
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