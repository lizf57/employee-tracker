// export db/connection 
require('./db/connection');

// export routes
const routes = require('./routes');

// export express
const express = require('express');
const app = express();
const PORT = 3001;

// use json and urlencoded and routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes); 

// listen to port
app.listen(PORT, () => console.log(`Employee Tracker listening at http://localhost:${PORT}`));