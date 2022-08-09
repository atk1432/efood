import React from 'react';
import ContainerMd from '../Share/ContainerMd';
import styles from '../Asset/Css/Header.module.css';
import Brand from './Brand';
import User from './User';


function Header() {

	return (
		<div className={styles.Header}>
			<ContainerMd classRow={styles.flexSpaceBetween}>
				<div className="col col-2 h-100">
					<Brand />
				</div>
				<div className="col col-2">
					<User />
				</div>
			</ContainerMd>
		</div>
	);
}


export default Header;