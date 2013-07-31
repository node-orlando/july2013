// module.exports = 'value';

/*
	
	var module = require('module-exports.js')
	// module == 'value'

*/

// exports.name = function woo (arg1) {
	
// }

/*
	
	var module = require('module-exports.js')
	// module == { name: [Function: woo] }

	var module = require('module-exports.js').name
	// module = [Function: woo]

*/

// var Module = function woo (arg1) {

// 	console.log('init with: ' + arg1);

// 	this.name = function bar (arg2) {

// 	}


	// alternative
	// return {
	// 	method: function baz (arg3) {
	// 	}
	// }

// }

// module.exports = Module;

/*

	var module = require('module-exports.js');
	// module == [Function: woo]

	var module = require('module-exports.js').name;
	// module == woo
	// WTFFFFF

	var module = new (require('module-exports.js'))('mongodb://localhost');
	// console.log init with args
	// module == { name: [Function: bar] }

*/


