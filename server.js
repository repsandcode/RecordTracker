const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');
const path = require('path');
// Routes Variables
const mainRoutes = require('./routes/main');
const postRoutes = require('./routes/posts');


// use .env file in config folder
require('dotenv').config({ path: "./config/.env" });

// passport config
require('./config/passport')(passport);

// connect to Database
connectDB();

// => Here we expose the views so it can be rendered.
app.set('views', path.join(__dirname, 'views'));
// Using EJS for views
app.set('view engine', 'ejs');

// Static folder
app.use(express.static('public'));

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(logger('dev'));

// Use forms for put/delete
app.use(methodOverride('_method'));

// Setup Sessions - stored in MongoDB 
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
      mongoUrl: process.env.MONGO_URI 
    })
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use flash messages for errors, info, ect...
app.use(flash());

// Setup Routes where the Server is listening
app.use('/', mainRoutes);
app.use('/record', postRoutes);

// listen to DB
app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on PORT ${process.env.PORT}, you better catch it!`)
}) 