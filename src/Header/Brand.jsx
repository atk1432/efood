import React from 'react';
import Image from '../Share/Image';
import brand from '../Asset/Img/brand.jpg';
import styles from '../Asset/Css/Header.module.css';


function Brand() {

	return (
		<a href="" className="h-100 d-block">
			<Image className={'h-100 ' + styles.Brand} src={brand} />
		</a>
	);
}


export default Brand;