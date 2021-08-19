const express = require('express');

// added passport
const passport = require('passport');

// define the routes
const studentRoutes = require('../app/routes/students.server.routes');
const courseRoutes = require('../app/routes/courses.server.routes');

// create a new express app
const app = express();

// configure the session middleware ------------------------------------------------------------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  added passport
app.use(passport.initialize()); //bootstrapping the Passport module
app.use(passport.session()); //keep track of your user's session

// load the routing files
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);

// export the express application instance
module.exports = app;