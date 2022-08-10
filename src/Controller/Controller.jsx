import { useState } from 'react';
import Item from './Item';
import styles from '../Asset/Css/Controller.module.css';


function Controller() {

    const [ items, setItems ] = useState([
        <i className="fa-solid fa-house"></i>,
        <i className="fa-solid fa-cart-shopping"></i>,
        <i className="fa-solid fa-ellipsis"></i>,
        <i className="fa-solid fa-newspaper"></i>,
        <i className="fa-solid fa-phone"></i>
    ]);

    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <li key={index}>
                    <Item className={ styles.ControllerItem }>
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