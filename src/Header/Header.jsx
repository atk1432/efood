import { memo } from 'react';
import { Provider } from 'react-redux';
import storeUser from '../Redux/storeUser';
import ContainerFluid from '../Share/ContainerFluid';
import styles from '../Asset/Css/Header.module.css';
import shares from '../Asset/Css/Share.module.css';
import Brand from './Brand';
import User from './User';


function Header() {

	return (
        <Provider store={storeUser}>
    		<div className={styles.Header}>
    			<ContainerFluid classRow={shares.flexSpaceBetween}>
    				<div className={
                        "col col-2 h-100 "
                    }>
    					<Brand />
    				</div>
    				<div className={
                        "col col-2 h-100 " + shares.flexEnd
                    }>
    					<User />
    				</div>
    			</ContainerFluid>
    		</div>
        </Provider>
	);
}


export default memo(Header);