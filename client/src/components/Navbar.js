import React from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';


export default function Navbar(props) {

	const handleLogout = () => {
		logout().then(() => {
			props.setUser(null);
		})
	}

	return (
		<nav>
			{props.user ? (
				<>
					<div className="p-3 mb-2 bg-info text-dark bg-opacity-50">
					<div className="d-flex justify-content-between">

					<Link to="/HomePage">
					<button type="submit" class="btn btn-outline-dark">Profil</button>
					</Link>
					<Link to="/CarsList">
					<button type="submit" class="btn btn-outline-dark">Cars</button>
					</Link>
					<Link to="/addCar">
					<button type="submit" class="btn btn-outline-dark">Add a Car</button>
					</Link>
					<Link to="/" onClick={() => handleLogout()}>
					<button type="submit" class="btn btn-outline-dark">Logout</button>

					</Link>
					</div>
					</div>
					
				</>
			) : (
				<>
					<div className="p-3 mb-2 bg-info text-dark bg-opacity-50">
					<div className="d-flex justify-content-between">
					<Link to="/signup">
					<button className="btn btn-outline-dark">Sign up</button>
					</Link>
					<Link to="/login">
					<button className="btn btn-outline-dark">Login</button>
					</Link>
					</div>
					</div>
				</>
			)}
		</nav>
	)
}
