import { Link } from 'react-router-dom';

// here we destructure the fields from the props object
export default function CarCard({ marke, modell, baujahr, kilometer, preis, rating, imgUrl, _id }) {
	console.log(marke);
	return (
		<>
		
			<div className="CarHeading">
				<h1>{marke}</h1>
				<h3>{modell}</h3>
			</div>
		<Link to={`/cars/${_id}`}>
      		<img className="CarCard" src={imgUrl} />
	  	</Link>

	  

  

		{/* <div class="row g-7" >
  			<div class="col-sm-1" ></div>
			  <Link to={`/cars/${_id}`} />
			  <img src={imgUrl} />
			  </div>
		 */}

		{/* <div>
			<Link to={`/cars/${_id}`}>
			<img src={imgUrl} />
			
			</Link>
		</div> */}
		</>
		
	)
}
