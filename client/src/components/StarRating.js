import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

export default function StarRating(props) {
    
    const API_URL = 'http://localhost:5005';


    const [rating, setRating]= useState (0);
    const [hover, setHover] = useState(0);

    const carId = props.match.params.id;

    useEffect(() => {
		axios.get(`${API_URL}/api/cars/${carId}`)
			.then(response => {
				console.log('use effect');
                //console.log(response.data.rating)
				setRating(response.data.rating);
                
			})
			.catch(err => console.log(err))
	}, [])



    
    const handleSubmit = e => {
        e.preventDefault();
        const requestBody = { rating }
        
        //console.log(rating)
        axios.put(`${API_URL}/api/cars/${carId}`, requestBody)
        .then (response => {
             props.history.push('/CarsList')
        })
        .catch(err => console.log(err))
        
    
    }    
    


    return (
        <>
        <div className="star-rating">
        {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button class="rating" type="button" key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}>
            <span className="star">&#9733;</span>
          </button>
          
        );
        })}
        <form onSubmit={handleSubmit}>
        <button type="submit"> Save your Rating !</button>
        </form>
      </div>
      </>
    
    );
};