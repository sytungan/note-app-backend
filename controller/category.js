'use strict'

let response = require('../response');
let connect = require('../connect');


exports.getCategories = (req, res) => {
	let search = req.query.search || '';

	connect.query(
		`SELECT * FROM category WHERE category_name LIKE '%${search}%'	`,
		(error, rows, field) => {
			if (error) {
				throw error;
			} else {
				response.ok(rows, res)
			}
		}
	) 
}

exports.getCategoryById = (req, res) => {
	let id = req.params.id
	if ( id != 0 &&  id != '') {
		connect.query(
			`SELECT * FROM category WHERE id=?`,
			[id],
			(error, rows, field) => {
				if (error) {
					throw error;
				} else {
					response.ok(rows, res)
				}
			}
		)
	}
}

exports.postCategory = (req, res) => {

	let name = req.body.category_name;
	let image_url = req.body.image_url;

	if (name != '') {
		connect.query(
			`INSERT INTO category SET category_name=?, image_url=?`,
			[name, image_url],
			(error, rows, field) => {
			if (rows.affectedRows != 0) {
				connect.query(
					`SELECT * FROM category ORDER BY id DESC LIMIT 1`,
					(error, rows, field) => {
						if (error) {
							throw error;
						} else {
							response.ok(rows, res)
						}
					}
				)
			}
		})
	} else {
		return res.send({
			error: true,
			message: 'categoryName cannot be Empty',
		})
	}
}

exports.patchCategory = (req, res) => {
	let name = req.body.categoryName;
	let id = req.params.id;
 
	if (id != '' && id != 0) {
		if (name != '') {
			connect.query(
				`UPDATE category SET category_name=? WHERE id=?`,
				[name,id],
				(error, rows, field) => {
					if (rows.affectedRows != 0) {
						return res.send({
							error: false,
							data: rows,
							message: "Data has been changed"
						})
					} else {
						return res.send({
							error:false,
							message: "No data has been changed"
						})
					}
				}
			)
		} else {
			return res.send({
				message: 'categoryName cannot be Empty'
			})
		}
	} else {
		return res.send({
			error: true,
			message: 'Cannot Update Category',
		})
	}
}


exports.deleteCategory = (req, res)  => {
	let id = parseInt(req.params.id)

	if (id != null && id != 0) {
		connect.query(
			`DELETE FROM category WHERE id=?`,
			[id],
			(error, rows, field) => {
				if (rows.affectedRows != 0) {
					return res.send({
						error: false,
						values: id,
						message: "Data has been deleted"
					})
				} else {
					return res.send({
						error:false,
						message: "No data has been deleted"
					})
				}
			}
		)
	} else {
		return res.send({
			error: true,
			message: 'Cannot Delete Category',
		})
	}
}