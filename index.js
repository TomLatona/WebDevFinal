//node api

//initialize server
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))

//initialize json db
const fs = require('fs')
let rawdata = fs.readFileSync('./courses.json');
let course = JSON.parse(rawdata);

//define routes
app.get('/', (req, res) => {
	res.send('<h1> Final Project </h1>')
})

app.get('/api', (req, res) => {
	let outputJSON = {
		courses : course["courses"]
	}
	res.json(outputJSON);
})

app.get('/api/by_code/:qcode', (req, res) => {
	let query = req.params['qcode']
	filtered_courses = course["courses"].filter(q => q.course_code.includes(query))
	let outputJSON = {
		courses : filtered_courses
	}
	res.json(outputJSON);
})

app.get('/api/by_level/:qlevel', (req, res) => {
	let query = req.params['qlevel']
	filtered_courses = course["courses"].filter(q => q.course_level.includes(query))
	let outputJSON = {
		courses : filtered_courses
	}
	res.json(outputJSON);
})

app.get('/api/by_title/:qtitle', (req, res) => {
	let query = req.params['qtitle']
	filtered_courses = course["courses"].filter(q => q.title.includes(query))
	let outputJSON = {
		courses : filtered_courses
	}
	res.json(outputJSON);
})

app.get('/api/by_instructor/:qname', (req, res) => {
	let query = req.params['qname']
	filtered_courses = course["courses"].filter(q => q.instructor.includes(query))
	let outputJSON = {
		courses : filtered_courses
	}
	res.json(outputJSON);
})

app.get('/api/by_nameAndLevel/:xname/:xlevel', (req, res) => {
	let xxname = req.params['xname']
	let xxlevel = req.params['xlevel']
	filtered_courses = course["courses"].filter(
		q => {
			if ((q.instructor.includes(xxname) && q.course_level.includes(xxlevel))) {
				return true;
			}
			return false;
		}
	);
	let outputJSON = {
		courses : filtered_courses
	}
	res.json(outputJSON);
})

//serve static front-end
app.use('/demo', express.static('front_end'));

//start server
app.listen(port, () => console.log(`App running on port ${port}`));