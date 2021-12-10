//node api

//initialize server
const express = require('express');
const app = express();
const port = 3000;
//const port = process.env.PORT || 80;

var api_routes = require('./api_routes.js');
app.use('/api', api_routes);

//serve static front-end
app.use(express.static('front_end'));

//start server
app.listen(port, () => console.log(`App running on port ${port}`));