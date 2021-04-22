'use strict'

let mysql = require('mysql')

require('dotenv/config')

let conn = mysql.createConnection({
	host: process.env.HOST,
	user: 'root',
	password: process.env.PASS,
	database: process.env.DATABASE
})

conn.connect(err => {
	if (err) throw err;
})

module.exports = conn;