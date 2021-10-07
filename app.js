// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// session configuration

const session = require('express-session');
const MongoStore = require('connect-mongo');
const DB_URL = "mongodb://localhost/myWishCar"

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		// for how long is the user logged in -> this would be one day 	
		cookie: { maxAge: 1000 * 60 * 60 * 24 },
		resave: true,
		saveUninitialized: false,
		store: MongoStore.create({
			mongoUrl: DB_URL
		})
	})
)
// end of session configuration


// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
// const allRoutes = require("./routes");
// app.use("/api", allRoutes);

const home = require ("./routes/index");
app.use("/HomePage", home)


const signup = require ("./routes/auth")
app.use("/api/auth", signup)

const login = require ("./routes/auth")
app.use("/api/auth", login)

const logout = require ("./routes/auth")
app.use("/api/auth", logout)

const auth = require ("./routes/auth")
app.use("/api/auth", auth)


const addCar = require ("./routes/cars")
app.use("/", addCar)

const path = require('path');
app.use(express.static(path.join(__dirname, "/client/build")));

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
