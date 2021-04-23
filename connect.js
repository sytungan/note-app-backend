'use strict'

let mysql = require('mysql')

require('dotenv/config')

let conn = mysql.createConnection({
	host: process.env.HOST || "localhost",
	user: 'root',
	password: process.env.PASS || '0209',
	database: process.env.DATABASE || "note",
})

conn.connect(err => {
	if (err) throw err;
})

module.exports = conn;