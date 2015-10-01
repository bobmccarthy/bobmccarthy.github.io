'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults:{
		name: '',
		password: '',
		contact: '',
		instrument: '',
		description: '',
		img: ''

	},
	urlRoot: 'https://jmingus-server.herokuapp.com/collections/bob-SU',
	idAttribute: '_id'
})