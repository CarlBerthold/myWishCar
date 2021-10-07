import axios from 'axios';
import {useState, useEffect} from 'react'
import CarCard from '../components/CarCard';
import AddCar from '../components/AddCar';





export default function CarsList() {
    
    const API_URL = 'http://localhost:5005';

    const [search, setSearch] = useState ('');
    const [cars, setCars]= useState([]);
    const [rating, setRating]=useState('')


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

    // const options = [...new Set(cars.map(car => car.rating))].map(rating => {
    //     return <option value={rating} key={rating}>{rating}</option>
    //   });

    const filteredCars = cars.filter(
    car =>`${car.marke}${car.modell}`.toLowerCase().includes(search.toLowerCase())
    );
    
      const searchedCar = filteredCars.map(car => {
        return <tr key={car.id}>
          <td>{car.marke}</td>
          <td>{car.modell}</td>
        </tr>
      });

    return (
        <>
        <div>

        </div>
        <div>
            <h1>All the Cars</h1>
                <input type="text" name="search" value={search} onChange={e => setSearch(e.target.value)} />
                <select name="rating" value={rating} onChange={e => setRating(e.target.value)}>
                <option value="">All</option>
                {options}
                </select>

		        {filteredCars.map(car => <CarCard key={car._id} {...car} />)}
                {/* {options.map(car => <CarCard key={car.rating} {...cars} /> )} */}
        </div>

        <div>
            <AddCar refreshCars={getAllCars}/>
        </div>
        </>
    )
}
