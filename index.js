
//================ VARIABEL =================//

let express = require('express')
let cors = require('cors')
let app = express()
let port = process.env.PORT || 3000
let bodyParser = require('body-parser')
let routes = require('./routes')
require('dotenv/config')


//========== INITIALIZE BODY PARSER ===========//

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

app.use(bodyParser.json())


//============= CONFIGURASI CORS ==============//

let corsOptions = {
  origin: process.env.ALLOW_CORS,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


//============= LOGGED MIDDLEWARE ==============//

app.use((req, res, next) => {
	console.log('Someone Logged with method', req.method, 'at', Date.now(), 'in', req.url)
	next()
})

routes(app)
app.listen(port)
console.log('Listening to Port '+ port)

