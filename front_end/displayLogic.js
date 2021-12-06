//updateView button logic
//sends data entered in field to api, returns new view with filtered output

var updateView = async (button) => {
	if(button.dataset.querytype == 'by_instructor') {
		let queryvalue = document.querySelector('#nameQuery').value;
		api = 'http://localhost:3000/api/by_instructor/${queryvalue}';
		//fix above: ${queryvalue} is being included in the string, 
		//I think because handlebars not being imported properly (see index_front.html)
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