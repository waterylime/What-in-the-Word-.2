var selectedLang = '';
$(document).ready(function() {
	$.get('/api/dashboard').then(function(data) {
		console.log(data);
		for (var i = 0; i < data.length; i++) {
			var wordDiv = $('<div>').addClass('cardDiv');
			var titleDiv = $('<div>').addClass('titleDiv');
			var pOne = $('<p>').text(data[i].name);
			pOne.addClass('card-title');
			titleDiv.append(pOne);
			var pTwo = $('<p>').text(data[i].description);
			var image = $('<img>').attr('src', data[i].image);
			wordDiv.append(titleDiv, pTwo, image);
			$('.card').append(wordDiv);
		}
	});
});
$('#search1').on('click', function(event) {
	console.log('submit');
	event.preventDefault();
	selectedLang = $('#myList :selected').text();
	console.log(selectedLang);
	if (selectedLang === 'Japanese') {
		return japanese();
	} else if (selectedLang === 'French') {
		return french();
	} else {
		return spanish();
	}
});
function japanese(query) {
	var query = $('#input_text').val();
	console.log(query);
	var queryURL =
		'https://cors-anywhere.herokuapp.com/http://beta.jisho.org/api/v1/search/words?keyword=' + encodeURI(query);
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function(response) {
		console.log(response);
		var wordDiv = $('<div>').addClass('cardDiv');
		var titleDiv = $('<div>').addClass('titleDiv');
		var speakerButton = $('<button>').addClass('fas fa-volume-up');
		var saveButton = $('<button>').addClass('button save').text('Save');
		speakerButton.attr('id', 'speaker');
		var pOne = $('<p>').text(response.data[0].japanese[0].word);
		pOne.addClass('card-title');
		titleDiv.append(pOne, speakerButton, saveButton);
		var pTwo = $('<p>').text(response.data[0].senses[0].english_definitions[0]);
		wordDiv.append(titleDiv, pTwo);
		$('.card').prepend(wordDiv);
		var query = $('#input_text').val();
		var queryUrl1 =
			'https://www.googleapis.com/customsearch/v1?q=' +
			encodeURI(query) +
			'&cx=008178743786087981107:hpgckvpylnl&searchType=image&key=AIzaSyDXVQjXJ6f75Uw8GzUsbFCMh2oqzge56TQ';
		console.log(queryUrl1);
		$.ajax({
			url: queryUrl1,
			method: 'GET'
		}).then(function(res) {
			console.log(res);
			var image = $('<img>').attr('src', res.items[0].link);
			console.log(image);
			wordDiv.append(image);
			$('.card').append(wordDiv);
			$('.save').on('click', function(event) {
				event.preventDefault();
				console.log('parent clicked');
				console.log('selected' + selectedLang);
				console.log('item', localStorage.getItem('id'));
				var pkg = {
					name: response.data[0].japanese[0].word,
					language: selectedLang,
					description: response.data[0].senses[0].english_definitions[0],
					image: res.items[0].link,
					UserId: localStorage.getItem('id')
				};
				$.ajax({
					url: '/api/dashboard',
					method: 'POST',
					data: pkg
				});
			});
		});
	});
}

function french(query) {
	var query = $('#input_text').val();
	var queryURL =
		'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' +
		encodeURI(query) +
		'?key=3634fd55-b777-4316-b6a6-070f3b29b843';
	console.log(queryURL);
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function(response) {
		console.log(response);
		var wordDiv = $('<div>').addClass('cardDiv');
		var titleDiv = $('<div>').addClass('titleDiv');
		var speakerButton = $('<button>').addClass('fas fa-volume-up');
		var saveButton = $('<button>').addClass('button save').text('Save');
		speakerButton.attr('id', 'speaker');
		var pOne = $('<p>').text(response[0].meta.id);
		pOne.addClass('card-title');
		titleDiv.append(pOne, speakerButton, saveButton);
		var pTwo = $('<p>').text(response[0].shortdef[0]);
		wordDiv.append(titleDiv, pTwo);
		$('.card').prepend(wordDiv);
		var query = $('#input_text').val();
		var queryUrl1 =
			'https://www.googleapis.com/customsearch/v1?q=' +
			encodeURI(query) +
			'&cx=008178743786087981107:hpgckvpylnl&searchType=image&key=AIzaSyDXVQjXJ6f75Uw8GzUsbFCMh2oqzge56TQ';
		console.log(queryUrl1);
		$.ajax({
			url: queryUrl1,
			method: 'GET'
		}).then(function(res) {
			console.log(res);
			var image = $('<img>').attr('src', res.items[0].link);
			console.log(image);
			wordDiv.append(image);
			$('.card').append(wordDiv);
			$('.save').on('click', function(event) {
				event.preventDefault();
				console.log('parent clicked');
				console.log('selected' + selectedLang);
				console.log('item', localStorage.getItem('id'));
				var pkg = {
					name: response[0].meta.id,
					language: selectedLang,
					description: response[0].shortdef[0],
					image: res.items[0].link,
					UserId: localStorage.getItem('id')
				};
				console.log(pkg);
				$.ajax({
					url: '/api/dashboard',
					method: 'POST',
					data: pkg
				});
			});
		});
	});
}
function spanish(query) {
	var query = $('#input_text').val();
	var queryURL =
		'https://www.dictionaryapi.com/api/v3/references/spanish/json/' +
		encodeURI(query) +
		'?key=3ff709b9-b76f-4829-8ce8-857a0204cb70';
	console.log(queryURL);
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function(response) {
		console.log(response);
		var wordDiv = $('<div>').addClass('cardDiv');
		var titleDiv = $('<div>').addClass('titleDiv');
		var speakerButton = $('<button>').addClass('fas fa-volume-up');
		var saveButton = $('<button>').addClass('button save').text('Save');
		speakerButton.attr('id', 'speaker');
		var pOne = $('<p>').text(response[0].meta.id);
		pOne.addClass('card-title');
		titleDiv.append(pOne, speakerButton, saveButton);
		var pTwo = $('<p>').text(response[0].shortdef[0]);
		wordDiv.append(titleDiv, pTwo);
		$('.card').prepend(wordDiv);
		var query = $('#input_text').val();
		var queryUrl1 =
			'https://www.googleapis.com/customsearch/v1?q=' +
			encodeURI(query) +
			'&cx=008178743786087981107:hpgckvpylnl&searchType=image&key=AIzaSyDXVQjXJ6f75Uw8GzUsbFCMh2oqzge56TQ';
		console.log(queryUrl1);
		$.ajax({
			url: queryUrl1,
			method: 'GET'
		}).then(function(res) {
			console.log(res);
			var image = $('<img>').attr('src', res.items[0].link);
			console.log(image);
			wordDiv.append(image);
			$('.card').append(wordDiv);
			$('.save').on('click', function(event) {
				event.preventDefault();
				console.log('parent clicked');
				console.log('selected' + selectedLang);
				var pkg = {
					name: response[0].meta.id,
					language: selectedLang,
					description: response[0].shortdef[0],
					image: res.items[0].link,
					UserId: localStorage.getItem('id')
				};
				$.ajax({
					url: '/api/dashboard',
					method: 'POST',
					data: pkg
				});
			});
		});
	});
}

function startArtyom() {
	artyom.initialize({
		language: 'en-GB',
		continuous: false,
		debug: true,
		listen: true
	});
}
var artyom = new Artyom();
$('.card').on('click', '#speaker', function() {
	console.log('clicked button');
	var word = String($(this).parent('.titleDiv').children('.card-title').text());
	console.log(word);
	console.log('clicked');
	startArtyom();
	artyom.say(word);
});
