const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/ziv-meets').then(
   () => {
      console.log('Connected to database.');
   },
   error => {
      console.log('Failed to connect to database.');
      console.log('Error log:', error);
   }
);

// logging
app.use(morgan('dev'));

// allow all origins
app.use(cors());

// parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing

module.exports = app;
