import { useState } from 'react';

 
function User() {

	const [ isLogin, setIsLogin ] = useState(false);

	return (
		<a href="">
			{ isLogin ? 
				<h3>User</h3> :
				<i className="fa-solid fa-right-to-bracket fs-3"></i> 
			}
		</a>
	);
}


export default User;