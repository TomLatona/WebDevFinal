//node api

//initialize server
const express = require('express');
const app = express();
//const port = 3000;
const port = process.env.PORT || 80;

var api_routes = require('./api_routes.js');
app.use('/api', api_routes);

//serve static front-end
app.use(express.static('front_end'));

// //to allow access from other machines, CORS error
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     next();
// });

const cors = require("cors");
const corsOptions = {
	origin: '*',
	credentials: true,
	optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

//start server
app.listen(port, () => console.log(`App running on port ${port}`));