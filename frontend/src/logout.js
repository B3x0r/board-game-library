import React from 'react';
import Card from 'react-bootstrap/Card';
import { UserContext } from './context';

function Logout() {
	const { setIsLoggedin } = React.useContext(UserContext);

	const handleLogout = () => {
		setIsLoggedin(false);
		window.location.href = "/#";
		};

	return (
		<Card>
			bgcolor="success"
			header="Log Out"
			body={
				<button type="submit"
					className="btn btn-light"
					onClick={handleLogout}>
					Logout User
				</button>
		</Card>
      }
  	/>
	)
}

export default Logout;
