import React from 'react';




export default function HomePage(props) {

	console.log(props.user)
	
	
	return (
		<div>
			<h1>Welcome {props.user.username} to your profil</h1>
			
			
		</div>
	)

	
}
