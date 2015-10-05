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
	urlRoot: 'http://tiyfe.herokuapp.com/collections/bob-Skills-Up',
	idAttribute: '_id'
})