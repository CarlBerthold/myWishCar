import { useState } from 'react'
import { signup } from '../services/auth';

export default function Signup(props) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log(username, password)

		signup(username, password)
			.then(response => {
				console.log(response);
				if (response.message) {
					// reset the form 
					setUsername('');
					setPassword('');
					// set the message
					setMessage(response.message);
				} else {
					// user is correctly signed up in the backend
					// add the user to the state of App.js
					props.setUser(response);
					// redirect to the projects overview
					props.history.push('/HomePage');
				}
			})
			.catch(err => console.log(err));
	}

	return (
		<>

			<div>
			<img src="Key.jpg" width="1000px" height="800px" />
			</div>
			<br></br>
			<h3>Signup</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<br></br>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<br></br>
				<span>
				<button type="submit">Sign Up ✍️</button>
				{message && (
					<h3>{message}</h3>
				)}
				</span>
			</form>
			
		</>
	)
}
