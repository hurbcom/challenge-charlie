const express = require('express')
const cors = require('cors')
const path = require('path')
const routes = require('./routes/routes')
const bodyParser = require('body-parser')

const server = express()
const public = express.static(path.join(__dirname, '../../', 'dist'))

server.use(public)
server.use(bodyParser.json());
server.use(cors())

routes.configuraRotas(server)

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080...')
})