import React from 'react';




export default function HomePage(props) {

	console.log(props.user)
	
	
	return (
		<div>
			<h1>Welcome {props.user.username} to your profil</h1>

			<p>here will be soon your personal rated Cars and cars your marked</p>
			
			
		</div>
	)

	
}
