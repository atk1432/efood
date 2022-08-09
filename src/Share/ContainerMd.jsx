import React from 'react';


function ContainerMd(props) {
	return (
		<div className="container-md h-100">
			<div className={
				"row h-100 " + (props.classRow ?? "")
			}>
				{ props.children }
			</div>
		</div>
	);
}

export default ContainerMd;