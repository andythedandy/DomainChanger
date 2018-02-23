
// TODO: Should come from user input
var domains = [
		'louis.de',
		'louis.at',
		'louis-moto.fr',
		'louis-moto.co.uk',
		'louis.nl',
		'louis.be',
		'louis-moto.it'
	];
debugger;

(function (){
	let el = document.getElementById('urlList');

	console.log(el);

	let domainList = domains.join('<br>');

	el.appendChild(domainList);

	console.log(tabInfo);
	let url = tabs.query({
		active: true,
		lastFocusedWindow:true
	});

	console.log(url);
})();
