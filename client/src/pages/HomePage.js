import React from 'react';
import session from 'express-session';




export default function HomePage(props) {

	
	
	
	return (
		<div>
			<h3>{props.username}</h3>
			<h1>Home Page 🦄 🌈</h1>
			<h2>here should be a greeting for the logedin user</h2>
			
			
		</div>
	)
}
