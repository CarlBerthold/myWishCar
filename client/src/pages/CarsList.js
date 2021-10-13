import axios from 'axios';
import {useState, useEffect} from 'react'
import CarCard from '../components/CarCard';
import AddCar from '../components/AddCar';





export default function CarsList() {
    
    const API_URL = 'http://localhost:5005';

    const [search, setSearch] = useState ('');
    const [cars, setCars]= useState([]);
    const [rating, setRating]= useState('')
    const [baujahr, setBaujahr]= useState('')



    const getAllCars = () => {
        axios.get(`${API_URL}/api/cars`)
        .then (cars => {
            console.log(cars)
            setCars(cars.data);
            
        })
        .catch(err => console.log(err));
    }


    useEffect(() => {
        getAllCars();
        //console.log(props.cars)
        
    }, [])

    const ratingOptions = [...new Set(cars.map(car => car.rating))].map(rating => {
        return <option value={rating} key={rating}>{rating}</option>
    });
    const yearOptions = [...new Set(cars.map(car => car.baujahr))].map(baujahr => {
        return <option value={baujahr} key={baujahr}>{baujahr}</option>
    });
    const filteredCars = cars.filter(car => { 
        return`${car.marke}${car.modell}`.toLowerCase().includes(search.toLowerCase())
        && (car.rating == rating || !rating)
        && (car.baujahr == baujahr || !baujahr)
    });
    return (
        <>
    <div>
        <h1>All the Cars</h1>
    </div>
        <div className="select">
            <div class="container">
        <div class="row align-items-start">
            <div class="col">
            <select name="rating" value={rating} onChange={e => setRating(e.target.value)}>
                <option value="">filter for Rating </option>
                {ratingOptions}
            </select>
        </div>
            <div class="col">
            <input type="text" name="search" value={search} onChange={e => setSearch(e.target.value)} />
            Search a car
            
        </div>
            <div class="col">
            <select name="year" value={baujahr} onChange={e => setBaujahr(e.target.value)}>
                <option value="">filter for Year </option>
                {yearOptions}
            </select>
            </div>
        </div>

		        {filteredCars.map(car => <CarCard key={car._id} {...car} />)}
        </div>
        </div>

        <div>
            <AddCar refreshCars={getAllCars}/>
        </div>
        </>
    )
}
