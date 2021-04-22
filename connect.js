'use strict'

let mysql = require('mysql')

require('dotenv/config')

let conn = mysql.createConnection({
	host: process.env.HOST || "localhost",
	user: 'root',
	password: process.env.PASS || "6UZPFfDaMX4",
	database: process.env.DATABASE || "epiz_27997143_oke",
})

conn.connect(err => {
	if (err) throw err;
})

module.exports = conn;