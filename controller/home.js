'use strict'

let response = require('../response');

exports.welcome = (req, res) => {
	response.ok('Status Ok', res)
}