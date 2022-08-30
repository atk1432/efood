import { useState, memo } from 'react';
import { useSelector } from 'react-redux';
// import carts from '../Redux/carts';
import Item from './Item';
import styles from '../Asset/Css/Controller.module.css';


function Controller() {

    const [ active, setActive ] = useState(0);
    const cartsNumber = useSelector(state => state.carts.numbers);
    const user = useSelector(state => state.user.name);

    const renderItems = () => {
        var items = [
            {
                name: 'Home',
                to: '/',
                element: <i className="fa-solid fa-house"></i>
            }, 
            {
                name: 'Cart',
                to: '/cart',
                element: <i className="fa-solid fa-cart-shopping"></i>,
                badge: user ? cartsNumber : 0
            },
            {
                name: 'News',
                element: <i className="fa-solid fa-newspaper"></i>
            },
            {
                name: 'Phone',
                element: <i className="fa-solid fa-phone"></i>
            },
            {
                name: 'More',
                element: <i className="fa-solid fa-ellipsis"></i>
            },
        ];

        return items.map((item, index) => {
            return (
                <li 
                    key={index}
                    onClick={() => setActive(index)}
                >
                    <Item 
                        className={ 
                            styles.ControllerItem + ' ' + 
                            (index === active ? styles['ControllerItem--Active'] : '')
                        }
                        metaInfo={ item.name }
                        to={ item.to }
                    >
                        { item.element }
                        { item.badge ? 
                            <span 
                                className={
                                    `badge bg-primary position-absolute rounded-circle ${styles.ControllerItem__Badge}`
                                }
                            >
                                { item.badge }
                            </span> :
                            <></>
                        }
                    </Item>
                </li>
            );
        });
    }

    return (        
        <ul className={ styles.Controller }>
            { renderItems() }
        </ul>
    );
}


// Controller = memo(Controller);

// export default () => 
//     <Provider store={carts}>
//         <Controller />
//     </Provider>
// ;

export default memo(Controller);