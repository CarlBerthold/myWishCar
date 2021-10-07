const router = require("express").Router();
const Car = require('../models/Car');



// ********* require fileUploader in order to use it *********
const fileUploader = require("../config/cloudinary.config");

// get all Cars
router.get('/api/cars', (req, res, next) => {
	Car.find()
		.then(cars => {
			res.status(200).json(cars);
		})
		.catch(err => next(err));
});

// POST '/api/upload' => Route that will receive an image, send it to Cloudinary via the fileUploader and return the image URL
router.post("/api/cars/upload", fileUploader.single("imgUrl"), (req, res, next) => {
	 console.log('file is: ', req.file)
  
	if (!req.file) {
	  next(new Error("No file uploaded!"));
	  return;
	}
	// get the URL of the uploaded file and send it as a response.
	// 'secure_url' can be any name, just make sure you remember to use the same when accessing it on the frontend
  
	res.json({ secure_url: req.file.path });
  });


// create a Car
router.post('/api/cars/addCar', (req, res, next) => {
	const { marke, modell, baujahr, kilometer, preis, rating, imgUrl  } = req.body;
	Car.create({
		marke, 
        modell, 
        baujahr, 
        kilometer, 
        preis,
        rating,
        imgUrl
	})
		.then(car => {
			// we return http status code 201 - created
			res.status(201).json(car);
		})
		.catch(err => {
			next(err);
		})
})

router.get('/api/cars/:id', (req, res, next) => {
	Car.findById(req.params.id)
		.then(car => {
			// check if the id is not valid
			// if (!mongoose.Types.ObjectId.isValid(req.params.id))

			if (!car) {
				res.status(404).json(car);
			} else {
				res.status(200).json(car);
			}
		})
		.catch(err => {
			next(err);
		})
});

router.put('/api/cars/:id', (req, res, next) => {
	const { rating, timesRating } = req.body;
	Car.findById(req.params.id, {rating: rating}, {timesRating: timesRating})
	.then (newRating => {
	Car.findByIdAndUpdate(req.params.id, { rating: rating }, { new: true })
		.then(updatedCar => {
			res.status(200).json(updatedCar);
		})
		.catch(err => next(err));
	})
});

module.exports = router;
