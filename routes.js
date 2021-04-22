'use strict'

module.exports = (app) => {

	//======= Make Variabel for Controller =======//

	let home = require('./controller/home')
	let note = require('./controller/note')
	let category = require('./controller/category')


	//=================== HOME ====================//

	app.get('/', home.welcome)


	//=================== NOTE ====================//

	app.get('/notes', note.getNotes)	
	app.get('/notes/:id', note.getNoteById)
	app.get('/notes/category/:id', note.getNotesByCategory)
	app.post('/notes', note.postNote)		
	app.patch('/notes/:id', note.patchNote) 	
	app.delete('/notes/:id', note.deleteNote)	


	//================ CATEGORY ===================//
	
	app.get('/category', category.getCategories) 
	app.get('/category/:id', category.getCategoryById)			
	app.post('/category', category.postCategory) 		
	app.patch('/category/:id', category.patchCategory) 		
	app.delete('/category/:id', category.deleteCategory) 

	
}