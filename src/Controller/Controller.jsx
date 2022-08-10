import { useState } from 'react';
import Item from './Item';
import styles from '../Asset/Css/Controller.module.css';


function Controller() {


    const renderItems = () => {
        var items = [
            <i className="fa-solid fa-house"></i>,
            <i className="fa-solid fa-cart-shopping"></i>,
            <i className="fa-solid fa-ellipsis"></i>,
            <i className="fa-solid fa-newspaper"></i>,
            <i className="fa-solid fa-phone"></i>
        ];

        var letters = [
            'Home', 'Cart', 'More', "News", 'Phone'
        ]

        return items.map((item, index) => {
            return (
                <li key={index}>
                    <Item 
                        className={ styles.ControllerItem }
                        metaInfo={ letters[index] }
                    >
                        { item }
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