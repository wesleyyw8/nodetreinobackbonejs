var City = Backbone.Model.extend({
	defaults:{
		id: '',
		timezone: ''
	}
});

var CitiesCollection = Backbone.Collection.extend({
	model: City
});

var citiesCollection = new CitiesCollection([
	{ id: 'London', timezone: 'GMT'},
	{ id: 'Tokyo', timezone: 'JST'},
	{ id: 'Melbourne', timezone: 'EDT'},
	{ id: 'Los Angeles', timezone: 'PST'},
	{ id: 'New York', timezone: 'EST'}
]);