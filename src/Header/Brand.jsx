import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Share/Image';
import brand from '../Asset/Img/brand.jpg';
import styles from '../Asset/Css/Header.module.css';


function Brand(props) {

	return (
		<Link to="/" className="h-100 d-inline-block">
			<Image className={'h-100 ' + props.className} src={brand} />
		</Link>
	);
}


export default Brand;