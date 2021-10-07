import { useState, useEffect } from 'react'
import axios from 'axios';
import StarRating from '../components/StarRating';


export default function CarsDeatails(props) {

	const API_URL = 'http://localhost:5005';

	const [car, setCar] = useState(null);

	const carId = props.match.params.id;

	const getCar = () => {
		axios.get(`${API_URL}/api/cars/${carId}`)
			.then(response => {
				console.log(response.data);
				setCar(response.data);
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getCar();
	}, [])

    

	return (
		<div>
            {car && (
				<>

{/* <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
                <div class="ratio ratio-4x3">
                    <img src={car.imgUrl} />
                </div>
				<div className="card-body">
					<h5 className="card-title">{car.marke}</h5>
					<ul class="list-group list-group-flush">
    					<li class="list-group-item">Model: {car.modell}</li>
    					<li class="list-group-item">Year: {car.baujahr}</li>
    					<li class="list-group-item">Miles: {car.kilometer}</li>
						<li class="list-group-item">Price: {car.preis}</li>
  					</ul>
					<li class="list-group-item"><StarRating {...props}/></li>
				</div>


                    {/* <button>{car.rating}/10</button> */}
					{/* <Link to={`/projects/edit/${project._id}`}>
						<button>Edit this project</button>
					</Link> */}
				</>
)}
			{/* Edit the project */}
		</div>
	);
}

