//node api

//initialize server
const express = require('express');
const app = express();
const port = 5000;
//app.use(express.static('public'))

var api_routes = require('./api_routes.js');
app.use('/api', api_routes);

//serve static front-end
app.use('/demo', express.static('front_end'));

app.get("", (req, res) => {
	res.send("hello world");
});

//start server
app.listen(port, () => console.log(`App running on port ${port}`));