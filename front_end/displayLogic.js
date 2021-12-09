//updateView button logic
//sends data entered in field to api, returns new view with filtered output

var updateView = async (button) => {
	
	if(button.dataset.querytype == 'by_title') {
		let queryvalue = document.querySelector('#titleQuery').value;
		api = `http://localhost:3000/api/by_title/${queryvalue}`;
		const data = await fetch(api);
		const model = await data.json();
		render_view_title(model);
	}
	if(button.dataset.querytype == 'by_level') {
		let queryvalue = document.querySelector('#levelQuery').value;
		api = `http://localhost:3000/api/by_level/${queryvalue}`;
		const data = await fetch(api);
		const model = await data.json();
		render_view_level(model);
	}
	if(button.dataset.querytype == 'by_instructor') {
		let queryvalue = document.querySelector('#nameQuery').value;
		api = `http://localhost:3000/api/by_instructor/${queryvalue}`;
		const data = await fetch(api);
		const model = await data.json();
		render_view_name(model);
	}
	if(button.dataset.querytype == 'by_code') {
		let queryvalue = document.querySelector('#codeQuery').value;
		api = `http://localhost:3000/api/by_code/${queryvalue}`;
		const data = await fetch(api);
		const model = await data.json();
		render_view_code(model);
	}
	if(button.dataset.querytype == 'by_nameAndLevel') {
		let xnameQ = document.querySelector('#xnameQuery').value;
		let xlevelQ = document.querySelector('#xlevelQuery').value;
		api = `http://localhost:3000/api/by_nameAndLevel/${xnameQ}/${xlevelQ}`;
		const data = await fetch(api);
		const model = await data.json();
		render_view_nameAndLevel(model);
	}
}

var render_view_name = (model) => {
	var source = document.querySelector("#show_results_view").innerHTML;
	var template = Handlebars.compile(source);
	var html = template(model);
	document.querySelector("#nameResults").innerHTML = html;
}

var render_view_title = (model) => {
	var source = document.querySelector("#show_results_view").innerHTML;
	var template = Handlebars.compile(source);
	var html = template(model);
	document.querySelector("#titleResults").innerHTML = html;
}

var render_view_code = (model) => {
	var source = document.querySelector("#show_results_view").innerHTML;
	var template = Handlebars.compile(source);
	var html = template(model);
	document.querySelector("#codeResults").innerHTML = html;
}

var render_view_level = (model) => {
	var source = document.querySelector("#show_results_view").innerHTML;
	var template = Handlebars.compile(source);
	var html = template(model);
	document.querySelector("#levelResults").innerHTML = html;
}

var render_view_nameAndLevel = (model) => {
	var source = document.querySelector("#show_results_view").innerHTML;
	var template = Handlebars.compile(source);
	var html = template(model);
	document.querySelector("#nameAndLevelResults").innerHTML = html;
}

//remaining to do:

//deploy on heroku and netlify

//make video