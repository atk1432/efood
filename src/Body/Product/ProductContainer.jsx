import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import ProductLoading from '../Section/ProductLoading';
import Description from './Description';


function ProductContainer() {

    const params = useParams();
    const [ data, setData ] = useState({
        name: 'Phở Gà Ngon 47',
        types: [ 'Bún', 'Phở', 'Cháo, Tạp Dế Bạc' ],
        image: 'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZBYRP6KRXJCEN/hero/f6f3e83b389a4355a7e9072a55cd0fbc_1659913137408522559.jpg',
        rate: 4.5,
        time: 25, // Minute 
        distance: 0.5, // Km
        price: 25000,
        description: "The school canteen is a cozy place that serves \
            food to the students every day. It has several tables and \
            chairs for the students to sit, and along with these are \
            metal lockers where you can put your books safely. \
            The walls of the canteen have posters displayed on \
            them regarding different events that happen in the \
            school but none of it is more enjoyable than when \
            the delicious food gets served on your plate! My favorite \
            food item there is a burger with lettuce, tomato and cheese \
            spread all over it! In spite of being called burgers they are not \
            made entirely out of meat; they have some veggies too which I \
            love! But my favorite of all is a burger with ketchup, \
            mayonnaise and lettuce. It is one of the best things \
            I would be having in school!"
    });

    const [ loaded, setLoaded ] = useState(false);

    return (
        <>
            {loaded ? 
                <Product data={data} /> :
                // <ProductLoading />
            }
            <Description>
                { data.description }
            </Description>
        </>
    )
}

export default ProductContainer;