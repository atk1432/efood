import { useState } from 'react';
import Item from './Item';
import styles from '../Asset/Css/Controller.module.css';


function Controller() {


    const renderItems = () => {
        var items = [
            {
                name: 'Home',
                element: <i className="fa-solid fa-house"></i>
            }, 
            {
                name: 'Cart',
                element: <i className="fa-solid fa-cart-shopping"></i>,
                badge: 2
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

        // var letters = [
        //     'Home', 'Cart', 'News', 'Phone', 'More'
        // ]

        return items.map((item, index) => {
            return (
                <li key={index}>
                    <Item 
                        className={ styles.ControllerItem }
                        metaInfo={ item.name }
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

export default Controller;