import { useState } from 'react'
import axios from 'axios';
import service from "../api/service";


export default function AddCar(props) {

	const API_URL = 'http://localhost:5005';

	const [marke, setMarke] = useState('');
	const [modell, setModell] = useState('');
    const [baujahr, setBaujahr] = useState(Number);
    const [kilometer, setKilometer] = useState(Number);
    const [preis, setPreis] = useState(Number);
    const [rating, setRating] = useState(Number);
    const [imgUrl, setImgUrl] = useState('');
	const [timesRating, setTimesRating] = useState(Number);

	// ******** this method handles just the file upload ********
	const handleFileUpload = (e) => {
		// console.log("The file to be uploaded is: ", e.target.files[0]);
	
		const uploadData = new FormData();
	
		// imageUrl => this name has to be the same as in the model since we pass
		// req.body to .create() method when creating a new thing in '/api/things/create' POST route
		uploadData.append("imgUrl", e.target.files[0]);
	
		service
		  .handleUpload(uploadData)
		  .then(response => {
			 console.log("response is: ", response);
			// after the console.log we can see that response carries 'secure_url' which we can use to update the state
			setImgUrl(response.secure_url);
		  })
		  .catch(err => console.log("Error while uploading the file: ", err));
	};




	const handleSubmit = e => {
		e.preventDefault();
		//props.setCars();

		service
		.saveNewCar({ marke, modell, baujahr, kilometer, preis, rating, imgUrl, timesRating })
		.then(res => {
			console.log("added new Car ", res);
		})
		.catch(err => console.log("Error while adding the new car", err))

		// make a post request to the server with the form fields in the body
		const requestBody = { marke, modell, baujahr, kilometer, preis, rating, imgUrl, timesRating };
		axios.post('/api/cars/addCar', requestBody)
			.then(car => {
				// reset the state and thereby reset the form
				setMarke('');
				setModell('');
                setBaujahr(Number);
                setKilometer(Number);
                setPreis(Number);
                setRating(Number);
                setImgUrl('');
				setTimesRating(Number)
				// we need to trigger 'getAllProjects' in the ProjectListPage component
				props.refreshCars();
			})
			.catch(err => console.log(err))
	}

	return (
		<div class="d-flex justify-content-center">
		<div>
			<h1>add a car</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="marke">Marke: </label>
				<input type="text" name="marke" value={marke}
				onChange={e => setMarke(e.target.value)}
				/>
				<br></br>
				<label htmlFor="modell">Modell: </label>
				<input type="text" name="modell" value={modell}
				onChange={e => setModell(e.target.value)}
				/>
				<br></br>
                <label htmlFor="baujahr">Baujahr: </label>
                <input type="Number" name="baujahr"value={baujahr}
				onChange={e => setBaujahr(e.target.value)}
				/>
				<br></br>
                <label htmlFor="kilometer">Kilometer: </label>
                <input type="Number" name="kilometer" value={kilometer}
				onChange={e => setKilometer(e.target.value)}
				/>
				<br></br>
                <label htmlFor="preis">€ Preis: </label>
                <input type="Number" name="preis" value={preis}
				onChange={e => setPreis(e.target.value)}
				/>
				<br></br>
                <label htmlFor="rating">Rating: </label>
                <input type="Number" name="rating" max="5" value={rating}
				onChange={e => setRating(e.target.value)}
				/>
				<br></br>
                <label htmlFor="imgUrl">Img: </label>
                <input type="File" name="imgUrl"
				onChange={handleFileUpload} />
				{imgUrl && <img src={imgUrl} style={{ height: '150px '}}/> } 
				<br></br>
				<button type="submit" class="btn btn-dark">Add this Car</button>
				{/* <button type="submit">Add this Car</button> */}
			</form>
		</div>
		</div>
		
	)
}
