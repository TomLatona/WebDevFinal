//updateView button logic
//sends data entered in field to api, returns new view with filtered output

var updateView = async (button) => {
	if(button.dataset.querytype == 'by_instructor') {
		let queryvalue = document.querySelector('#nameQuery').value;
		api = `http://localhost:3000/api/by_instructor/${queryvalue}`;
	}

	const data = await fetch(api);
	const model = await data.json();
	render_view(model);
}

var render_view = (model) => {
	var source = document.querySelector("#show_results_view").innerHTML;
	var template = Handlebars.compile(source);
	var html = template(model);
	document.querySelector("#results").innerHTML = html;
}


//remaining to do:
//finish styling the front end
//implement the rest of the search functions
//add route for search by name + level
//deploy on heroku and netlify