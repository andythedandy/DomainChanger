// TODO: Should come from user input
var domains = [
	'www.louis.de',
	'www.louis.at',
	'www.louis-moto.fr',
	'www.louis-moto.co.uk',
	'www.louis.nl',
	'www.louis.be',
	'www.louis-moto.it'
];

(function () {
	let el = document.getElementById('urlList');
	let url;

	browser.tabs.query({
		active: true,
		currentWindow: true
	}).then(function (tabs) {
		let currentTab;

		currentTab = tabs.pop();
		url = currentTab.url;

		if (url.match(/louis/)) {
			generateUrlList(currentTab);
		}
	});

	function generateUrlList(tab) {
		let listEl;
		for (let domain of domains) {
			listEl = document.createElement('div');
			listEl.setAttribute('class', 'entry');
			listEl.addEventListener('click', function (event) {
				browser.tabs.update(tab.id, {
					url: replaceDomain(domain)
				});
			});
			listEl.innerHTML = domain.replace(/www\./, '');
			el.appendChild(listEl);
		}
	}

	function replaceDomain(domain) {
		let parser = document.createElement('a');
		parser.href = url;
		parser.hostname = domain;

		return parser.href;
	}
})();
